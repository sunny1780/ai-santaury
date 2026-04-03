import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthShell from './AuthShell';
import { getDashboardPath, login, persistAuth } from '../utils/authApi';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const data = await login({ email, password });
      persistAuth(data);
      navigate(getDashboardPath(data.user.role));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell topLinkTo="/signup" topLinkLabel="Sign up">
      <div className="w-full max-w-[430px]">
        <div className="mb-8 text-center">
          <h1 className="text-[34px] font-semibold leading-[1.1] text-[#1D1D1F] sm:text-[44px]">
            Log In
          </h1>
        </div>

        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-[14px] bg-[#EFEFEF] text-[18px] font-medium text-[#1D1D1F] transition-colors hover:bg-[#E7E7E7]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[20px] font-semibold text-[#4285F4] shadow-sm">
            G
          </span>
          <span>Continue with Google</span>
        </button>

        <div className="my-8 flex items-center gap-4 text-[18px] text-[#8B8B8B]">
          <span className="h-px flex-1 bg-[#DFDFDF]" />
          <span>OR</span>
          <span className="h-px flex-1 bg-[#DFDFDF]" />
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
              required
              className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[18px] font-semibold text-[#1D1D1F]">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
            />
          </label>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-[16px] font-medium text-[#1A8CF0] no-underline transition-colors hover:text-[#0F7FDE]"
            >
              Forgot password?
            </Link>
          </div>

          {error ? (
            <div className="rounded-[10px] bg-[#FEECEC] px-4 py-3 text-[15px] text-[#D14343]">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-[14px] bg-[#1A8CF0] text-[24px] font-medium text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-[#0F7FDE] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Logging In...' : 'Log In'}
          </button>
        </form>

        <p className="mx-auto mt-8 max-w-[390px] text-center text-[15px] leading-7 text-[#6E6E6E]">
          By continuing, you agree to our{' '}
          <Link to="/" className="font-semibold text-[#1D1D1F] no-underline">
            Terms of services
          </Link>{' '}
          and{' '}
          <Link to="/" className="font-semibold text-[#1D1D1F] no-underline">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
