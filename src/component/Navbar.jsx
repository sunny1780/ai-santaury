import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between w-full px-4 sm:px-8 lg:px-[80px] py-4 bg-white">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo (1).png`}
          alt="AI Sanctuary"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="flex items-center justify-center min-w-[64px] h-6 text-[14px] lg:text-[16px] leading-6 font-medium text-[#747474] hover:text-[#162D66] transition-colors text-center no-underline"
                  style={{ letterSpacing: "0.005em" }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center justify-center min-w-[64px] h-6 text-[14px] lg:text-[16px] leading-6 font-medium text-[#747474] hover:text-[#162D66] transition-colors text-center"
                  style={{ letterSpacing: "0.005em" }}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#162D66] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#162D66] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#162D66] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col list-none m-0 p-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="block py-3 text-[16px] leading-6 font-medium text-[#747474] hover:text-[#162D66] transition-colors no-underline"
                    style={{ letterSpacing: "0.005em" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block py-3 text-[16px] leading-6 font-medium text-[#747474] hover:text-[#162D66] transition-colors"
                    style={{ letterSpacing: "0.005em" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
