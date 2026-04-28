import Sidebaar from './Sidebaar';

export default function InstSimplePage({ title }) {
  return (
    <div className="min-h-screen bg-[#F6F8FB] flex flex-col lg:flex-row">
      <Sidebaar />
      <main className="flex-1 px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
        <h1
          className="text-lg sm:text-xl font-semibold text-[#111827] m-0"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </h1>
        <p className="mt-2 text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Coming soon.
        </p>
      </main>
    </div>
  );
}
