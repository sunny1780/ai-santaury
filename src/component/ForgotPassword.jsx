import { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../utils/authApi';
import AuthShell from './AuthShell';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetUrl, setResetUrl] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!email.trim()) {
      setShowSuccess(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await forgotPassword({ email });
      setShowSuccess(true);
      setMessage(data.message);
      setResetUrl(data.resetUrl || `/reset-password?email=${encodeURIComponent(email.trim())}`);
    } catch (err) {
      setShowSuccess(false);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell topLinkTo="/signup" topLinkLabel="Sign up">
      <div className="w-full max-w-[430px]">
        <div className="mb-8">
          <h1 className="text-[34px] font-semibold leading-[1.12] text-[#1D1D1F] sm:text-[44px]">
            Forgot your password?
          </h1>
          <p className="mt-3 max-w-[420px] text-[18px] leading-8 text-[#7B7F8A]">
            Enter your email and we&apos;ll send a code to reset your password.
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
              onChange={(event) => {
                setEmail(event.target.value);
                if (showSuccess) {
                  setShowSuccess(false);
                }
                if (error) {
                  setError('');
                }
              }}
              placeholder="Your Email Address"
              required
              className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
            />
          </label>

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
            {isSubmitting ? 'Sending...' : 'Send Reset Code'}
          </button>
        </form>

        {showSuccess ? (
          <div className="mt-6 rounded-[10px] bg-[#E6F7EC] px-6 py-4 text-center text-[16px] font-medium text-[#2C8C5A]">
            {message || 'Check your email for the password reset code'}
          </div>
        ) : null}

        {resetUrl ? (
          <Link
            to={resetUrl}
            className="mt-4 block text-center text-[15px] font-medium text-[#1A8CF0] no-underline"
          >
            Enter reset code
          </Link>
        ) : null}
      </div>
    </AuthShell>
  );
}
