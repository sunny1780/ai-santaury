import { useEffect, useState } from 'react';

function extractUsernameFromEmail(email) {
  if (!email || typeof email !== 'string') return null;
  const [username] = email.split('@');
  return username || null;
}

function getStoredAuthUser() {
  try {
    const storedUser = localStorage.getItem('authUser');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    return null;
  }
}

export default function InstructorUserBadge() {
  const [authUser, setAuthUser] = useState(() => getStoredAuthUser());

  useEffect(() => {
    function syncAuthUser() {
      setAuthUser(getStoredAuthUser());
    }

    window.addEventListener('storage', syncAuthUser);

    return () => {
      window.removeEventListener('storage', syncAuthUser);
    };
  }, []);

  const displayName = authUser
    ? authUser.name ||
      authUser.fullName ||
      authUser.firstName ||
      extractUsernameFromEmail(authUser.email) ||
      'Profile'
    : 'Profile';

  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center justify-end gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#CBD5F5] text-sm font-semibold text-[#1E3A8A]">
        {avatarLetter}
      </div>
      <span
        className="max-w-[180px] truncate text-sm font-medium text-[#111827]"
        style={{ fontFamily: 'Manrope, sans-serif' }}
        title={authUser?.email || displayName}
      >
        {displayName}
      </span>
    </div>
  );
}
