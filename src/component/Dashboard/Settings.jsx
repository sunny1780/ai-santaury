import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { changePassword } from '../../utils/authApi';

function getStoredAuthUser() {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function splitName(user) {
  const sourceName =
    user?.name ||
    user?.fullName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') ||
    user?.email?.split('@')[0] ||
    '';

  const parts = sourceName.trim().split(/\s+/).filter(Boolean);

  return {
    firstName: user?.firstName || parts[0] || '',
    lastName: user?.lastName || parts.slice(1).join(' '),
  };
}

function validatePassword(password) {
  if (!password || password.length < 8) return 'Must contain at least 8 characters';
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    return 'Must contain uppercase, lowercase letters, and numbers';
  }
  if (password.length < 12 && !/[^A-Za-z0-9]/.test(password)) {
    return 'If less than 12 characters, it must contain a special character';
  }
  return '';
}

function ValidationItem({ valid, children }) {
  return (
    <p className={`m-0 ${valid ? 'text-[#16A34A]' : 'text-[#6B7280]'}`}>
      {valid ? '✓' : '✕'} {children}
    </p>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const authUser = useMemo(() => getStoredAuthUser(), []);
  const initialName = splitName(authUser);

  const [billingCycle, setBillingCycle] = useState('monthly');
  const [firstName, setFirstName] = useState(initialName.firstName);
  const [lastName, setLastName] = useState(initialName.lastName);
  const [profileMessage, setProfileMessage] = useState('');
  const [profileSaved, setProfileSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);

  const sectionHeadingStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.005em',
  };

  const inputClass =
    'w-full rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm text-[#111827] outline-none transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#DBEAFE]';

  const hasMinLength = newPassword.length >= 8;
  const hasRequiredMix = /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) && /\d/.test(newPassword);
  const hasSpecialRule = newPassword.length >= 12 || /[^A-Za-z0-9]/.test(newPassword);
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;
  const canSavePassword = currentPassword && hasMinLength && hasRequiredMix && hasSpecialRule && passwordsMatch;
  const canSaveProfile = firstName.trim().length > 0;

  function handleSubscribe() {
    setProfileSaved(false);
    setPasswordSaved(false);
    setProfileMessage(`The ${billingCycle === 'monthly' ? 'Monthly' : 'Yearly'} Pro plan is not connected to a payment provider yet.`);
  }

  function handleProfileSave() {
    if (!firstName.trim()) {
      setProfileSaved(false);
      setProfileMessage('First name is required.');
      return;
    }

    const updatedUser = {
      ...(authUser || {}),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      name: [firstName.trim(), lastName.trim()].filter(Boolean).join(' '),
      fullName: [firstName.trim(), lastName.trim()].filter(Boolean).join(' '),
    };

    localStorage.setItem('authUser', JSON.stringify(updatedUser));
    window.dispatchEvent(new Event('storage'));
    setProfileSaved(true);
    setProfileMessage('Profile information saved successfully.');
  }

  async function handlePasswordSave() {
    const validationError = validatePassword(newPassword);

    if (!currentPassword) {
      setPasswordSaved(false);
      setPasswordMessage('Current password is required.');
      return;
    }

    if (validationError) {
      setPasswordSaved(false);
      setPasswordMessage(validationError);
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordSaved(false);
      setPasswordMessage('Both passwords must match.');
      return;
    }

    try {
      const data = await changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      });

      setPasswordSaved(true);
      setPasswordMessage(data.message || 'Password updated successfully.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setPasswordSaved(false);
      setPasswordMessage(
        error.message?.includes('Endpoint not found (404)')
          ? 'The password change endpoint is not available on the running backend. Restart the backend server on port 5001 and try again.'
          : error.message || 'Unable to update password.'
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col lg:flex-row">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <h1
          className="text-[32px] font-semibold text-[#111827] m-0 mb-6"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Settings
        </h1>

        <div className="space-y-4">
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm">
            <div className="p-7 border-r border-[#E5E7EB]">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Upgrade to Pro
              </h2>
              <p className="mt-3 mb-2 text-sm font-semibold text-[#2563EB]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                What&apos;s included
              </p>
              <div className="h-px bg-[#E5E7EB] mb-5" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[#6B7280]">
                {[
                  'Priority access to premium course releases',
                  'Expanded learning analytics and progress insights',
                  'Early access to certificate-ready programs',
                  'Dedicated support for advanced learners',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-[#2563EB]">✓</span>
                    <span style={{ fontFamily: 'Manrope, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 flex flex-col items-center justify-center">
              <div className="inline-flex items-center rounded-full border border-[#E5E7EB] p-1 mb-3">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`text-[11px] px-3 py-1 rounded-full ${billingCycle === 'monthly' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-[#6B7280]'}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`text-[11px] px-3 py-1 rounded-full ${billingCycle === 'yearly' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-[#6B7280]'}`}
                >
                  Yearly (20%)
                </button>
              </div>

              <div className="text-[56px] leading-none text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {billingCycle === 'monthly' ? '$20' : '$192'}
              </div>

              <button
                type="button"
                onClick={handleSubscribe}
                className="mt-5 rounded-full bg-[#2563EB] text-white px-8 py-2.5 text-base font-medium hover:bg-[#1D4ED8] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {billingCycle === 'monthly' ? 'Subscribe Monthly Plan' : 'Subscribe Yearly Plan'}
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm">
            <div className="p-7 border-r border-[#E5E7EB]">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Personal Information
              </h2>
              <p className="mt-3 text-base text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Update the personal details associated with your account.
              </p>
            </div>

            <div className="p-7 space-y-4">
              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  First name
                </span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    setProfileMessage('');
                  }}
                  placeholder="First name"
                  className={inputClass}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Last name <span className="text-[#9CA3AF] font-normal">(optional)</span>
                </span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                    setProfileMessage('');
                  }}
                  placeholder="Last name"
                  className={inputClass}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              {profileMessage ? (
                <div className={`rounded-xl px-4 py-3 text-sm ${profileSaved ? 'bg-[#F0FDF4] text-[#166534]' : 'bg-[#FEF2F2] text-[#B91C1C]'}`}>
                  {profileMessage}
                </div>
              ) : null}

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleProfileSave}
                  disabled={!canSaveProfile}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                    canSaveProfile ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]' : 'bg-[#EEF2F7] text-[#C0C7D1]'
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm">
            <div className="p-7 border-r border-[#E5E7EB]">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Change Password
              </h2>
              <p className="mt-3 text-base text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Use a strong password to keep your account secure.
              </p>
            </div>

            <div className="p-7 space-y-4">
              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Current Password
                </span>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(event) => {
                    setCurrentPassword(event.target.value);
                    setPasswordMessage('');
                  }}
                  placeholder="Your current password"
                  className={inputClass}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  New Password
                </span>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                    setPasswordMessage('');
                  }}
                  placeholder="Your new password"
                  className={inputClass}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Confirm New Password
                </span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setPasswordMessage('');
                  }}
                  placeholder="Confirm your new password"
                  className={inputClass}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <div className="text-sm space-y-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <ValidationItem valid={hasMinLength}>Must contain at least 8 characters</ValidationItem>
                <ValidationItem valid={hasRequiredMix}>Must contain uppercase, lowercase letters, and numbers</ValidationItem>
                <ValidationItem valid={hasSpecialRule}>If less than 12 characters, must contain a special character</ValidationItem>
                <ValidationItem valid={passwordsMatch}>Both passwords must match</ValidationItem>
              </div>

              {passwordMessage ? (
                <div className={`rounded-xl px-4 py-3 text-sm ${passwordSaved ? 'bg-[#F0FDF4] text-[#166534]' : 'bg-[#FEF2F2] text-[#B91C1C]'}`}>
                  {passwordMessage}
                </div>
              ) : null}

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handlePasswordSave}
                  disabled={!canSavePassword}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                    canSavePassword ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]' : 'bg-[#EEF2F7] text-[#C0C7D1]'
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm">
            <div className="p-7 border-r border-[#E5E7EB] flex items-center">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Logout
              </h2>
            </div>
            <div className="p-7 flex items-center">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-full bg-[#E24A6A] text-white py-2.5 text-base font-medium hover:bg-[#D63B5D] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Logout
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
