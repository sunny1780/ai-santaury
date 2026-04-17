import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Mission", href: "/our-mission" },
  { label: "Our Facility", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const profileMenuRef = useRef(null);

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

  useEffect(() => {
    function handlePointerDown(event) {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
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

  // derive a display name and avatar for the header when the user is logged in
  function extractUsernameFromEmail(email) {
    if (!email || typeof email !== 'string') return null;
    const parts = email.split('@');
    return parts[0] || null;
  }

  const displayName = authUser
    ? (authUser.name || authUser.fullName || authUser.firstName || extractUsernameFromEmail(authUser.email) || 'Profile')
    : null;
  const avatarSrc = authUser && (authUser.avatar || authUser.profilePic || authUser.photoURL)
    ? (authUser.avatar || authUser.profilePic || authUser.photoURL)
    : `${process.env.PUBLIC_URL}/images/peoples.png`;

  function handleLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setAuthUser(null);
    setIsProfileMenuOpen(false);
    navigate('/');
  }

  return (
    <nav className="relative w-full px-4 sm:px-8 lg:px-[80px] py-4 bg-white">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={`${process.env.PUBLIC_URL}/images/llogo.png`}
          alt="AI Sanctuary"
          className="h-14 sm:h-12 w-auto object-contain"
        />
        {/* <span className="text-[8px] sm:text-[10px] font-bold text-[#162D66] tracking-tight leading-none">
        An EMO Foundation Initiative
        </span> */}
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
        {authUser ? (
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              onClick={() => setIsProfileMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D9E4F7] px-4 py-2 text-[14px] lg:text-[16px] font-medium text-[#162D66] hover:bg-[#F4F8FF] transition-colors"
              style={{ letterSpacing: '0.005em' }}
              aria-haspopup="menu"
              aria-expanded={isProfileMenuOpen}
            >
              <img
                src={avatarSrc}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span
                className="text-[14px] lg:text-[16px] font-medium text-[#162D66]"
                title={authUser?.email || ''}
              >
                {displayName}
              </span>
            </button>

            {isProfileMenuOpen ? (
              <div
                className="absolute right-0 top-[calc(100%+10px)] min-w-[180px] overflow-hidden rounded-2xl border border-[#E5ECF8] bg-white py-2 shadow-[0_18px_42px_rgba(15,23,42,0.14)]"
                role="menu"
              >
                <Link
                  to={authLink.href}
                  className="block px-4 py-2.5 text-[14px] font-medium text-[#162D66] no-underline transition-colors hover:bg-[#F4F8FF]"
                  style={{ letterSpacing: '0.005em' }}
                  role="menuitem"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  className="block w-full bg-transparent px-4 py-2.5 text-left text-[14px] font-medium text-[#B42318] transition-colors hover:bg-[#FFF5F4]"
                  style={{ letterSpacing: '0.005em' }}
                  role="menuitem"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <Link
            to={authLink.href}
            className="inline-flex items-center justify-center rounded-full border border-[#D9E4F7] px-4 py-2 text-[14px] lg:text-[16px] font-medium text-[#162D66] hover:bg-[#F4F8FF] transition-colors no-underline"
            style={{ letterSpacing: '0.005em' }}
          >
            <span>{authLink.label}</span>
          </Link>
        )}
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
                {authUser ? displayName : authLink.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
