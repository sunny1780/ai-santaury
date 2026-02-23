export function Details({ children, className = "" }) {
  return (
    <p
      className={`w-full max-w-[226.67px] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium text-[#747474] ${className}`}
      style={{
        fontFamily: "Manrope, sans-serif",
        fontWeight: 500,
        letterSpacing: "0.005em",
        height: "fit-content",
      }}
    >
      {children}
    </p>
  );
}

export default function Description({ children, className = "" }) {
  return (
    <p
      className={`w-full max-w-[643px] text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] font-normal text-[#162D66] ${className}`}
      style={{
        fontFamily: "Manrope, sans-serif",
        fontWeight: 400,
        letterSpacing: "0.005em",
        height: "fit-content",
      }}
    >
      {children}
    </p>
  );
}
