import { useEffect, useState } from 'react';
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
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    function syncAuthUser() {
      try {
        const storedUser = localStorage.getItem('authUser');
        setAuthUser(storedUser ? JSON.parse(storedUser) : null);
      } catch (error) {
        setAuthUser(null);
      }
    }

    syncAuthUser();
    window.addEventListener('storage', syncAuthUser);

    return () => {
      window.removeEventListener('storage', syncAuthUser);
    };
  }, []);

  const authLink = authUser
    ? {
        label: 'Profile',
        href: authUser.role === 'instructor' ? '/inst/dashboard' : '/dashboard',
      }
    : {
        label: 'Sign up',
        href: '/signup',
      };

  return (
    <nav className="relative w-full px-4 sm:px-8 lg:px-[80px] py-4 bg-white">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
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

      <div className="hidden md:flex items-center">
        <Link
          to={authLink.href}
          className="inline-flex items-center justify-center rounded-full border border-[#D9E4F7] px-5 py-2 text-[14px] lg:text-[16px] font-medium text-[#162D66] hover:bg-[#F4F8FF] transition-colors no-underline"
          style={{ letterSpacing: '0.005em' }}
        >
          {authLink.label}
        </Link>
      </div>

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
      </div>

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
            <li>
              <Link
                to={authLink.href}
                className="block py-3 text-[16px] leading-6 font-medium text-[#162D66] hover:text-[#0F7FDE] transition-colors no-underline"
                style={{ letterSpacing: '0.005em' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {authLink.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
