const INSTRUCTOR_COURSES_CACHE_KEY = 'instructorCoursesCache';
const APPROVED_COURSES_CACHE_KEY = 'approvedCoursesCache';
const ENROLLED_COURSES_CACHE_KEY = 'enrolledCoursesCache';

function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeCache(key, courses) {
  try {
    localStorage.setItem(key, JSON.stringify(Array.isArray(courses) ? courses : []));
  } catch (error) {
    // Ignore cache write failures.
  }
}

export function cacheInstructorCourses(courses) {
  writeCache(INSTRUCTOR_COURSES_CACHE_KEY, courses);
}

export function getCachedInstructorCourse(courseId) {
  return readCache(INSTRUCTOR_COURSES_CACHE_KEY).find((course) => course?._id === courseId) || null;
}

export function updateCachedInstructorCourse(updatedCourse) {
  if (!updatedCourse?._id) return;

  const courses = readCache(INSTRUCTOR_COURSES_CACHE_KEY);
  const next = courses.some((course) => course?._id === updatedCourse._id)
    ? courses.map((course) => (course?._id === updatedCourse._id ? updatedCourse : course))
    : [updatedCourse, ...courses];

  writeCache(INSTRUCTOR_COURSES_CACHE_KEY, next);
}

export function cacheApprovedCourses(courses) {
  writeCache(APPROVED_COURSES_CACHE_KEY, courses);
}

export function getCachedApprovedCourse(courseId) {
  return readCache(APPROVED_COURSES_CACHE_KEY).find((course) => course?._id === courseId) || null;
}

export function updateCachedApprovedCourse(updatedCourse) {
  if (!updatedCourse?._id) return;

  const courses = readCache(APPROVED_COURSES_CACHE_KEY);
  const next = courses.some((course) => course?._id === updatedCourse._id)
    ? courses.map((course) => (course?._id === updatedCourse._id ? updatedCourse : course))
    : [updatedCourse, ...courses];

  writeCache(APPROVED_COURSES_CACHE_KEY, next);
}

export function cacheEnrolledCourses(courses) {
  writeCache(ENROLLED_COURSES_CACHE_KEY, courses);
}

export function getCachedEnrolledCourse(courseId) {
  return readCache(ENROLLED_COURSES_CACHE_KEY).find((course) => course?._id === courseId) || null;
}

export function updateCachedEnrolledCourse(updatedCourse) {
  if (!updatedCourse?._id) return;

  const courses = readCache(ENROLLED_COURSES_CACHE_KEY);
  const next = courses.some((course) => course?._id === updatedCourse._id)
    ? courses.map((course) => (course?._id === updatedCourse._id ? updatedCourse : course))
    : [updatedCourse, ...courses];

  writeCache(ENROLLED_COURSES_CACHE_KEY, next);
}
