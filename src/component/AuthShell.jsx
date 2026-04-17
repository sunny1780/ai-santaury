import { Link } from 'react-router-dom';

function CapIcon({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M120 29 30 72.5 120 116l90-43.5L120 29Z"
        stroke={stroke}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M55 83v35.5l58.5 29.5a15 15 0 0 0 13.5 0L185 118.5V83"
        stroke={stroke}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M194 80v55"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="m194 135 10 29-10 16-10-16 10-29Z"
        stroke={stroke}
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AuthShell({
  children,
  topLinkTo = '/login',
  topLinkLabel = 'Login',
}) {
  return (
    <section className="min-h-screen bg-white px-5 py-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] max-w-[1400px] flex-col gap-10 lg:flex-row lg:gap-14">
        <div className="relative hidden overflow-hidden rounded-[24px] border border-[#A9CBFF] bg-gradient-to-br from-[#EEF5FF] via-[#B5CBFF] to-[#6F93F8] lg:flex lg:min-h-[760px] lg:w-[52%] lg:flex-col">
          <CapIcon className="absolute left-[17%] top-[23%] h-24 w-24 text-white/18" />
          <CapIcon className="absolute right-[8%] top-[9%] h-40 w-40 text-white/14" />
          <CapIcon className="absolute bottom-[5%] left-[4%] h-32 w-32 text-[#A7C7FF]" />

          <div className="flex h-full items-center justify-center px-10">
            <CapIcon className="h-[330px] w-[500px] max-w-full text-white/65" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-6 pt-2 sm:pt-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/llogo.png`}
                alt="AI Sanctuary"
                className="h-11 w-auto sm:h-14"
              />
            </Link>

            <Link
              to={topLinkTo}
              className="pt-2 text-[17px] font-medium text-[#667085] no-underline transition-colors hover:text-[#1A73E8]"
            >
              {topLinkLabel}
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">{children}</div>

          <div className="mt-2 lg:hidden">
            <div className="relative overflow-hidden rounded-[24px] border border-[#A9CBFF] bg-gradient-to-br from-[#EEF5FF] via-[#B5CBFF] to-[#6F93F8] px-6 py-10">
              <CapIcon className="absolute left-4 top-4 h-16 w-16 text-white/15" />
              <CapIcon className="absolute right-3 top-6 h-24 w-24 text-white/12" />
              <div className="flex justify-center">
                <CapIcon className="h-40 w-56 text-white/65" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
