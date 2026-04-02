import { useMemo, useState } from 'react';
import Sidebar from './Sidebar';

const dummyNotifications = Array.from({ length: 30 }).map((_, idx) => ({
  id: idx + 1,
  text: 'You have a new notification',
  time: '17:45',
}));

export default function Notifications() {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const total = dummyNotifications.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return dummyNotifications.slice(start, start + pageSize);
  }, [safePage]);

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
              John Doe
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
            {pageItems.map((n) => (
              <div key={n.id} className="grid grid-cols-[1fr_110px] px-5 sm:px-6 py-3 text-sm text-[#111827]">
                <div style={{ fontFamily: 'Manrope, sans-serif' }}>{n.text}</div>
                <div className="text-right text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {n.time}
                </div>
              </div>
            ))}
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

