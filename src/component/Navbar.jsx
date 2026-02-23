const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-[80px] py-4 bg-white">
      <a href="#" className="flex items-center gap-3">
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo (1).png`}
          alt="AI Sanctuary"
          className="h-10 w-auto object-contain"
        />
      </a>

      <ul className="flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center justify-center min-w-[64px] h-6 text-[16px] leading-6 font-medium text-[#747474] hover:text-[#162D66] transition-colors text-center"
              style={{ letterSpacing: "0.005em" }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
