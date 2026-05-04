import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthShell from './AuthShell';
import { resetPassword } from '../utils/authApi';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [resetCode, setResetCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasMixedAndNumber =
    /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
  const needsSpecialCharacter = password.length >= 12 || /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!token && !resetCode.trim()) {
      setError('Reset code is required. Check your email and enter the code here.');
      return;
    }

    setIsSubmitting(true);

    try {
      await resetPassword({ token, resetCode: resetCode.trim(), password, confirmPassword });
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function ValidationItem({ valid, children }) {
    return (
      <li
        className={`flex items-center gap-3 text-[14px] leading-6 ${
          valid ? 'text-[#7B7F8A]' : 'text-[#7B7F8A]'
        }`}
      >
        <span
          className={`text-[18px] leading-none ${valid ? 'text-[#2DBE72]' : 'text-[#FF4D4F]'}`}
          aria-hidden="true"
        >
          {valid ? '✓' : '✕'}
        </span>
        <span>{children}</span>
      </li>
    );
  }

  return (
    <AuthShell topLinkTo="/signup" topLinkLabel="Sign up">
      <div className="w-full max-w-[430px]">
        <div className="mb-8">
          <h1 className="text-[34px] font-semibold leading-[1.12] text-[#1D1D1F] sm:text-[44px]">
            Reset your password
          </h1>
          <p className="mt-3 max-w-[420px] text-[18px] leading-8 text-[#7B7F8A]">
            Enter the code from your email and set a new password.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-[18px] font-semibold text-[#1D1D1F]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email Address"
              className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
            />
          </label>

          {!token ? (
            <label className="block">
              <span className="mb-2 block text-[18px] font-semibold text-[#1D1D1F]">
                Reset Code
              </span>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={resetCode}
                onChange={(event) => setResetCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit code"
                required
                className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] tracking-[0.2em] text-[#1D1D1F] outline-none transition-colors placeholder:tracking-normal placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
              />
            </label>
          ) : null}

          <label className="block">
            <span className="mb-2 block text-[18px] font-semibold text-[#1D1D1F]">
              New Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[18px] font-semibold text-[#1D1D1F]">
              Confirm New Password
            </span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
            />
          </label>

          <ul className="space-y-1 pt-1">
            <ValidationItem valid={hasMinLength}>
              Must contain atleast 8 characters
            </ValidationItem>
            <ValidationItem valid={hasMixedAndNumber}>
              Must contain uppercase, lowercase letters, and numbers
            </ValidationItem>
            <ValidationItem valid={needsSpecialCharacter}>
              If less than 12 characters, must contain a special character
            </ValidationItem>
            <ValidationItem valid={passwordsMatch}>
              Both password must match
            </ValidationItem>
          </ul>

          {error ? (
            <div className="rounded-[10px] bg-[#FEECEC] px-4 py-3 text-[15px] text-[#D14343]">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-[14px] bg-[#1A8CF0] px-5 text-[18px] font-medium text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-[#0F7FDE] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Saving...' : 'Set Password'}
          </button>
        </form>
      </div>
    </AuthShell>
  );
}
