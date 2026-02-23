export function Heading1({ children, className = "" }) {
  return (
    <h1
      className={`w-full max-w-[529px] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[100%] font-bold ${className}`}
      style={{
        fontFamily: "Manrope, sans-serif",
        fontWeight: 700,
        letterSpacing: "0.005em",
        height: "fit-content",
        background: "linear-gradient(135deg, #285ADE 0%, #162D66 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </h1>
  );
}

export default function Heading2({ children, className = "" }) {
  return (
    <h2
      className={`w-full max-w-[768px] text-center text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[100%] font-semibold text-[#162D66] ${className}`}
      style={{
        fontFamily: "Manrope, sans-serif",
        letterSpacing: "0.005em",
        fontWeight: 600,
        height: "fit-content",
      }}
    >
      {children}
    </h2>
  );
}
