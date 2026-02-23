export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-4 py-3 sm:gap-[8.63px] sm:px-[25.89px] sm:h-[51.79px] sm:py-0 rounded-full bg-[#326AFD] text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity w-max min-w-fit ${className}`}
    >
      {children}
    </button>
  );
}
