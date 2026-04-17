import { useEffect, useMemo, useState } from 'react';
import Sidebar from './Sidebar';
import { formatNotificationTime, getAuthUser, getCurrentUserNotifications } from '../../utils/notificationStore';

export default function Notifications() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [notifications, setNotifications] = useState(() => getCurrentUserNotifications());
  const authUser = getAuthUser();

  useEffect(() => {
    function syncNotifications() {
      setNotifications(getCurrentUserNotifications());
    }

    window.addEventListener('storage', syncNotifications);
    window.addEventListener('notifications-updated', syncNotifications);

    return () => {
      window.removeEventListener('storage', syncNotifications);
      window.removeEventListener('notifications-updated', syncNotifications);
    };
  }, []);

  const displayName = authUser
    ? authUser.name ||
      authUser.fullName ||
      authUser.firstName ||
      authUser.email?.split('@')[0] ||
      'Profile'
    : 'Profile';

  const total = notifications.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return notifications.slice(start, start + pageSize);
  }, [notifications, safePage]);

  const startLabel = String((safePage - 1) * pageSize + 1).padStart(2, '0');
  const endLabel = String(Math.min(safePage * pageSize, total)).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        {/* Top bar (right profile) */}
        <div className="flex items-center justify-end mb-6 sm:mb-8">
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm font-medium text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {displayName}
            </span>
            <div className="w-9 h-9 rounded-full bg-[#CBD5F5]" />
          </div>
        </div>

        <h1
          className="text-lg sm:text-xl font-semibold text-[#111827] m-0 mb-4 sm:mb-6"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Notifications
        </h1>

        {/* Table card */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_110px] px-5 sm:px-6 py-3 bg-[#F9FAFB] text-xs font-semibold text-[#6B7280]">
            <div style={{ fontFamily: 'Manrope, sans-serif' }}>Notification</div>
            <div className="text-right" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Time
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#F3F4F6]">
            {pageItems.length > 0 ? pageItems.map((n) => (
              <div key={n.id} className="grid grid-cols-[1fr_110px] px-5 sm:px-6 py-3 text-sm text-[#111827]">
                <div style={{ fontFamily: 'Manrope, sans-serif' }}>{n.text}</div>
                <div className="text-right text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {formatNotificationTime(n.createdAt)}
                </div>
              </div>
            )) : (
              <div className="px-5 sm:px-6 py-8 text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Abhi koi notification available nahi hai.
              </div>
            )}
          </div>
        </div>

        {/* Footer row: showing + pagination */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[#6B7280] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Showing {startLabel}-{endLabel} of {total} notifications
          </p>

          <div className="flex items-center gap-2 justify-start sm:justify-end">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="w-7 h-7 rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] flex items-center justify-center"
              aria-label="Previous page"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }).slice(0, 5).map((_, idx) => {
              const p = idx + 1;
              const active = p === safePage;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={[
                    'w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center',
                    active ? 'bg-[#2563EB] text-white' : 'bg-transparent text-[#6B7280]',
                  ].join(' ')}
                >
                  {p}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="w-7 h-7 rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] flex items-center justify-center"
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
