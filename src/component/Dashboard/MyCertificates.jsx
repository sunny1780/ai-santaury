import { useEffect, useMemo, useState } from 'react';
import Sidebar from './Sidebar';
import { getEnrolledCourses } from '../../utils/authApi';
import { cacheEnrolledCourses } from '../../utils/courseCache';
import { getCourseCompletionPercentage } from '../../utils/watchProgress';

const certIconSrc = `${process.env.PUBLIC_URL}/images/Cert.svg`;

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

function getAuthUser() {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function getDisplayName(user) {
  return user?.name || user?.fullName || user?.firstName || user?.email?.split('@')[0] || 'Student';
}

function getCertificateSvg({ studentName, courseTitle, issueDate }) {
  const safeStudentName = String(studentName || 'Student').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeCourseTitle = String(courseTitle || 'Course').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeIssueDate = String(issueDate || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="990" viewBox="0 0 1400 990">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f8fbff"/>
          <stop offset="100%" stop-color="#eef4ff"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="990" rx="36" fill="url(#bg)"/>
      <rect x="34" y="34" width="1332" height="922" rx="28" fill="none" stroke="#2563EB" stroke-width="4"/>
      <text x="700" y="170" text-anchor="middle" fill="#1D4ED8" font-size="28" font-family="Georgia, serif">AI Sanctuary</text>
      <text x="700" y="255" text-anchor="middle" fill="#111827" font-size="64" font-family="Georgia, serif" font-weight="700">Certificate of Completion</text>
      <text x="700" y="340" text-anchor="middle" fill="#6B7280" font-size="28" font-family="Arial, sans-serif">This certificate is proudly presented to</text>
      <text x="700" y="440" text-anchor="middle" fill="#111827" font-size="56" font-family="Georgia, serif" font-weight="700">${safeStudentName}</text>
      <line x1="360" y1="472" x2="1040" y2="472" stroke="#BFDBFE" stroke-width="4"/>
      <text x="700" y="560" text-anchor="middle" fill="#6B7280" font-size="28" font-family="Arial, sans-serif">for successfully completing the course</text>
      <text x="700" y="650" text-anchor="middle" fill="#1E3A8A" font-size="42" font-family="Georgia, serif" font-weight="700">${safeCourseTitle}</text>
      <text x="220" y="820" fill="#374151" font-size="22" font-family="Arial, sans-serif">Issue Date</text>
      <text x="220" y="860" fill="#111827" font-size="28" font-family="Georgia, serif">${safeIssueDate}</text>
      <line x1="220" y1="875" x2="430" y2="875" stroke="#94A3B8" stroke-width="2"/>
      <text x="980" y="820" fill="#374151" font-size="22" font-family="Arial, sans-serif">Authorized By</text>
      <text x="980" y="860" fill="#111827" font-size="28" font-family="Georgia, serif">AI Sanctuary</text>
      <line x1="980" y1="875" x2="1180" y2="875" stroke="#94A3B8" stroke-width="2"/>
    </svg>
  `.trim();
}

function CertificatePreview({ certificate }) {
  const issueDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#DBEAFE] bg-gradient-to-br from-[#F8FBFF] to-[#EEF4FF] p-8 shadow-sm">
      <div className={certificate.progress < 80 ? 'blur-md select-none pointer-events-none' : ''}>
        <div className="rounded-[24px] border-2 border-[#2563EB] bg-white/60 px-10 py-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">AI Sanctuary</div>
          <div className="mt-8 text-4xl font-semibold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>
            Certificate of Completion
          </div>
          <div className="mt-8 text-lg text-[#64748B]">This certificate is proudly presented to</div>
          <div className="mt-6 text-5xl font-semibold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>
            {certificate.studentName}
          </div>
          <div className="mx-auto mt-4 h-[2px] w-3/4 bg-[#BFDBFE]" />
          <div className="mt-10 text-lg text-[#64748B]">for successfully completing the course</div>
          <div className="mt-5 text-3xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Georgia, serif' }}>
            {certificate.title}
          </div>
          <div className="mt-16 flex items-end justify-between text-left">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#64748B]">Issue Date</div>
              <div className="mt-2 text-lg text-[#111827]">{issueDate}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.25em] text-[#64748B]">Authorized By</div>
              <div className="mt-2 text-lg text-[#111827]">AI Sanctuary</div>
            </div>
          </div>
        </div>
      </div>

      {certificate.progress < 80 ? (
        <div className="absolute inset-0 grid place-items-center bg-white/35">
          <div className="rounded-2xl bg-[#111827]/80 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg">
            Complete 80% to unlock clear certificate preview
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function MyCertificates() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const authUser = getAuthUser();

  useEffect(() => {
    let ignore = false;

    async function loadCourses() {
      try {
        const data = await getEnrolledCourses();
        if (!ignore) {
          const nextCourses = data.courses || [];
          setCourses(nextCourses);
          cacheEnrolledCourses(nextCourses);
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Unable to load certificates.');
        }
      }
    }

    loadCourses();
  }, []);

  const certificates = useMemo(
    () =>
      courses.map((course) => ({
        id: course._id,
        title: course.title,
        studentName: getDisplayName(authUser),
        progress: getCourseCompletionPercentage(course),
        course,
      })),
    [authUser, courses]
  );

  const total = certificates.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return certificates.slice(start, start + pageSize);
  }, [certificates, safePage]);

  const startLabel = total === 0 ? '00' : String((safePage - 1) * pageSize + 1).padStart(2, '0');
  const endLabel = total === 0 ? '00' : String(Math.min(safePage * pageSize, total)).padStart(2, '0');

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

  function handleDownload(certificate) {
    if (certificate.progress < 100) return;

    const issueDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const svg = getCertificateSvg({
      studentName: certificate.studentName,
      courseTitle: certificate.title,
      issueDate,
    });
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${certificate.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-certificate.svg`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }

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
              {getDisplayName(authUser)}
            </span>
            <div className="w-9 h-9 rounded-full bg-[#CBD5F5]" />
          </div>
        </div>

        {error ? (
          <div className="mb-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
            {error}
          </div>
        ) : null}

        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="divide-y divide-[#F3F4F6]">
            {pageItems.length > 0 ? pageItems.map((certificate) => (
              <div
                key={certificate.id}
                className="flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-[#FAFAFA] transition-colors"
              >
                <img src={certIconSrc} alt="" className="h-10 w-10 shrink-0 object-contain" width={40} height={40} />
                <div className="flex-1 min-w-0">
                  <p
                    className="m-0 text-base font-medium text-[#111827] truncate"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {certificate.title}
                  </p>
                  <p className="mt-1 mb-0 text-xs text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Progress: {certificate.progress}% {certificate.progress < 80 ? '• Blurry preview' : certificate.progress < 100 ? '• Preview unlocked' : '• Ready to download'}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="p-2 rounded-lg text-[#9CA3AF] hover:text-[#2563EB] hover:bg-[#EEF2FF] transition-colors"
                    aria-label="View certificate"
                  >
                    <EyeIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownload(certificate)}
                    disabled={certificate.progress < 100}
                    title={certificate.progress < 100 ? 'Download 100% completion par unlock hoga.' : 'Download certificate'}
                    className={[
                      'p-2 rounded-lg transition-colors',
                      certificate.progress < 100
                        ? 'text-[#CBD5E1] cursor-not-allowed'
                        : 'text-[#9CA3AF] hover:text-[#2563EB] hover:bg-[#EEF2FF]',
                    ].join(' ')}
                    aria-label="Download certificate"
                  >
                    <DownloadIcon />
                  </button>
                </div>
              </div>
            )) : (
              <div className="px-5 sm:px-6 py-8 text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Certificates for your enrolled courses will appear here.
              </div>
            )}
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

        {selectedCertificate ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/55 px-4 py-6">
            <div className="max-h-full w-full max-w-5xl overflow-auto rounded-3xl bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="m-0 text-2xl font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {selectedCertificate.title}
                  </h2>
                  <p className="mb-0 mt-1 text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {selectedCertificate.progress < 80
                      ? 'Certificate blurred hai. 80% completion par clear preview unlock hogi.'
                      : selectedCertificate.progress < 100
                        ? 'Certificate preview unlock ho chuki hai. Download 100% completion par milega.'
                        : 'Certificate ready hai. Aap download kar sakte hain.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm font-semibold text-[#374151]"
                >
                  Close
                </button>
              </div>

              <CertificatePreview certificate={selectedCertificate} />

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Completion: <span className="font-semibold text-[#111827]">{selectedCertificate.progress}%</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownload(selectedCertificate)}
                  disabled={selectedCertificate.progress < 100}
                  className={[
                    'rounded-xl px-5 py-3 text-sm font-semibold transition-colors',
                    selectedCertificate.progress < 100
                      ? 'bg-[#E5E7EB] text-[#94A3B8] cursor-not-allowed'
                      : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]',
                  ].join(' ')}
                >
                  {selectedCertificate.progress < 100 ? 'Download Locked' : 'Download Certificate'}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
