import { useEffect, useState } from 'react';
import { getPendingCourses, updateCourseStatus } from '../../utils/authApi';
import { addCurrentUserNotification, addNotification } from '../../utils/notificationStore';

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadCourses() {
      try {
        const data = await getPendingCourses();
        if (!ignore) setCourses(data.courses || []);
      } catch (loadError) {
        if (!ignore) setError(loadError.message || 'Pending courses load nahi ho sake.');
      }
    }

    loadCourses();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleStatus(courseId, status) {
    setBusyId(courseId);
    setError('');

    try {
      await updateCourseStatus(courseId, { status });
      const targetCourse = courses.find((course) => course._id === courseId);

      addCurrentUserNotification({
        text: `Course "${targetCourse?.title || 'Untitled'}" ${status} successfully.`,
        type: status === 'approved' ? 'success' : 'warning',
      });

      if (targetCourse?.createdBy?.email) {
        addNotification({
          recipient: targetCourse.createdBy.email,
          text: `Your course "${targetCourse.title}" was ${status} by admin.`,
          type: status === 'approved' ? 'success' : 'warning',
        });
      }

      setCourses((prev) => prev.filter((course) => course._id !== courseId));
    } catch (updateError) {
      setError(updateError.message || 'Course status update nahi ho saka.');
    } finally {
      setBusyId('');
    }
  }

  return (
    <main className="min-h-screen bg-[#F3F4F6] px-4 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="m-0 text-2xl font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Pending Course Approvals
        </h1>

        {error ? (
          <div className="mt-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
            {error}
          </div>
        ) : null}

        <div className="mt-6 grid gap-4">
          {courses.map((course) => (
            <article key={course._id} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#2563EB]">
                    {course.subCategory || course.category}
                  </div>
                  <h2 className="mt-2 mb-0 text-xl font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {course.title}
                  </h2>
                  <p className="mb-0 mt-2 text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {course.topic}
                  </p>
                  <p className="mb-0 mt-2 text-sm text-[#374151]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Instructor: {course.createdBy?.email || 'Unknown'}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    disabled={busyId === course._id}
                    onClick={() => handleStatus(course._id, 'rejected')}
                    className="rounded-lg bg-[#FEF2F2] px-4 py-2 text-sm font-medium text-[#B42318] disabled:opacity-60"
                  >
                    Reject
                  </button>
                  <button
                    type="button"
                    disabled={busyId === course._id}
                    onClick={() => handleStatus(course._id, 'approved')}
                    className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
                  >
                    {busyId === course._id ? 'Saving...' : 'Approve'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {courses.length === 0 && !error ? (
          <div className="mt-6 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center text-sm text-[#6B7280]">
            Koi pending course approval mein nahi hai.
          </div>
        ) : null}
      </div>
    </main>
  );
}
