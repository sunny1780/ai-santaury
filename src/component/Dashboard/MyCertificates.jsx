import { useMemo, useState } from 'react';
import Sidebar from './Sidebar';

const certIconSrc = `${process.env.PUBLIC_URL}/images/Cert.svg`;

const dummyCertificates = Array.from({ length: 30 }).map((_, idx) => ({
  id: idx + 1,
  title: 'Understanding User Research Techniques',
}));

const EyeIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DownloadIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MyCertificates() {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const total = dummyCertificates.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return dummyCertificates.slice(start, start + pageSize);
  }, [safePage]);

  const startLabel = String((safePage - 1) * pageSize + 1).padStart(2, '0');
  const endLabel = String(Math.min(safePage * pageSize, total)).padStart(2, '0');

  const pageButtons = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (safePage <= 3) {
      return [1, 2, 3, 'ellipsis', totalPages];
    }
    if (safePage >= totalPages - 2) {
      return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, 'ellipsis', safePage, 'ellipsis', totalPages];
  }, [totalPages, safePage]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1
            className="m-0 text-[#111827]"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '32px',
              letterSpacing: '0.005em',
            }}
          >
            My Certificates
          </h1>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm font-medium text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              John Doe
            </span>
            <div className="w-9 h-9 rounded-full bg-[#CBD5F5]" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="divide-y divide-[#F3F4F6]">
            {pageItems.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-[#FAFAFA] transition-colors"
              >
                <img src={certIconSrc} alt="" className="h-10 w-10 shrink-0 object-contain" width={40} height={40} />
                <p
                  className="flex-1 min-w-0 m-0 text-base font-medium text-[#111827] truncate"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {c.title}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    className="p-2 rounded-lg text-[#9CA3AF] hover:text-[#2563EB] hover:bg-[#EEF2FF] transition-colors"
                    aria-label="View certificate"
                  >
                    <EyeIcon />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-lg text-[#9CA3AF] hover:text-[#2563EB] hover:bg-[#EEF2FF] transition-colors"
                    aria-label="Download certificate"
                  >
                    <DownloadIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[#6B7280] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Showing {startLabel}-{endLabel} of {total} certificates
          </p>

          <div className="flex items-center gap-2 justify-start sm:justify-end flex-wrap">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage <= 1}
              className="w-7 h-7 rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] flex items-center justify-center disabled:opacity-40"
              aria-label="Previous page"
            >
              ‹
            </button>

            {pageButtons.map((item, idx) =>
              item === 'ellipsis' ? (
                <span key={`e-${idx}`} className="px-1 text-xs text-[#6B7280]">
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPage(item)}
                  className={[
                    'min-w-[28px] h-7 px-1 rounded-full text-xs font-semibold flex items-center justify-center',
                    safePage === item ? 'bg-[#2563EB] text-white' : 'bg-transparent text-[#6B7280]',
                  ].join(' ')}
                >
                  {item}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
              className="w-7 h-7 rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] flex items-center justify-center disabled:opacity-40"
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
