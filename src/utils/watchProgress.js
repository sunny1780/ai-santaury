const WATCH_PROGRESS_KEY = 'watchProgressByUser';

function getAuthUser() {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function getUserKey() {
  const authUser = getAuthUser();
  return authUser?.id || authUser?.email || 'guest';
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function readAllProgress() {
  try {
    const raw = localStorage.getItem(WATCH_PROGRESS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

function writeAllProgress(progress) {
  try {
    localStorage.setItem(WATCH_PROGRESS_KEY, JSON.stringify(progress));
    window.dispatchEvent(new Event('watch-progress-updated'));
  } catch (error) {
    // Ignore write failures.
  }
}

export function trackVideoWatchProgress({ courseId, lectureId, watchedSecondsDelta, watchedAt = new Date() }) {
  if (!courseId || !lectureId || !Number.isFinite(watchedSecondsDelta) || watchedSecondsDelta <= 0) {
    return;
  }

  const userKey = getUserKey();
  const dateKey = getDateKey(watchedAt);
  const allProgress = readAllProgress();
  const userProgress = allProgress[userKey] || {};
  const dayProgress = userProgress[dateKey] || {
    totalSeconds: 0,
    lectures: {},
  };
  const lectureProgress = dayProgress.lectures[lectureId] || {
    courseId,
    seconds: 0,
  };

  lectureProgress.seconds += watchedSecondsDelta;
  dayProgress.lectures[lectureId] = lectureProgress;
  dayProgress.totalSeconds += watchedSecondsDelta;
  userProgress[dateKey] = dayProgress;
  allProgress[userKey] = userProgress;
  writeAllProgress(allProgress);
}

export function getMonthlyWatchProgress(date = new Date()) {
  const userKey = getUserKey();
  const allProgress = readAllProgress();
  const userProgress = allProgress[userKey] || {};
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  const endDate = new Date(lastDayOfMonth);
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

  const weeks = [];
  const cursor = new Date(startDate);

  while (cursor <= endDate) {
    const week = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const dateKey = getDateKey(cursor);
      const totalSeconds = userProgress[dateKey]?.totalSeconds || 0;

      week.push({
        dateKey,
        dayOfMonth: cursor.getDate(),
        isCurrentMonth: cursor.getMonth() === month,
        totalSeconds,
      });

      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
  }

  return {
    monthLabel: date.toLocaleString('en-US', { month: 'long' }),
    weeks,
  };
}

export function getProgressLevel(totalSeconds) {
  if (totalSeconds >= 1800) return 4;
  if (totalSeconds >= 900) return 3;
  if (totalSeconds >= 300) return 2;
  if (totalSeconds > 0) return 1;
  return 0;
}

export function getWatchedLectureMap() {
  const userKey = getUserKey();
  const allProgress = readAllProgress();
  const userProgress = allProgress[userKey] || {};
  const watchedLectures = {};

  Object.values(userProgress).forEach((dayProgress) => {
    const lectures = dayProgress?.lectures || {};

    Object.entries(lectures).forEach(([lectureId, lectureProgress]) => {
      if (!watchedLectures[lectureId]) {
        watchedLectures[lectureId] = {
          courseId: lectureProgress?.courseId,
          seconds: 0,
        };
      }

      watchedLectures[lectureId].seconds += lectureProgress?.seconds || 0;
    });
  });

  return watchedLectures;
}

export function getCourseCompletionPercentage(course) {
  const sections = course?.curriculum || [];
  const totalLectures = sections.reduce((sum, section) => sum + (section.lectures?.length || 0), 0);

  if (totalLectures === 0) return 0;

  const watchedLectureMap = getWatchedLectureMap();
  let watchedLectures = 0;

  sections.forEach((section, sectionIndex) => {
    (section.lectures || []).forEach((lecture, lectureIndex) => {
      const lectureId = `${course._id}-${sectionIndex}-${lectureIndex}`;
      if ((watchedLectureMap[lectureId]?.seconds || 0) > 0) {
        watchedLectures += 1;
      }
    });
  });

  return Math.min(100, Math.round((watchedLectures / totalLectures) * 100));
}
