import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthShell from './AuthShell';
import { getDashboardPath, googleAuth, login, persistAuth, warmup } from '../utils/authApi';
import { mountGoogleButton } from '../utils/googleAuth';

export default function Login() {
  const navigate = useNavigate();
  const googleButtonRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  // Silently ping backend when page loads so it is warm by the time user clicks Log In.
  useEffect(() => {
    warmup();
  }, []);

  useEffect(() => {
    let cleanup;
    let isMounted = true;

    async function initializeGoogleButton() {
      if (!googleButtonRef.current || !googleClientId) {
        return;
      }

      try {
        cleanup = await mountGoogleButton(googleButtonRef.current, {
          clientId: googleClientId,
          text: 'continue_with',
          onCredential: async (credential) => {
            setError('');
            setIsGoogleSubmitting(true);

            try {
              const data = await googleAuth({ credential, mode: 'login' });
              persistAuth(data);
              navigate(getDashboardPath(data.user.role));
            } catch (err) {
              if (isMounted) {
                setError(err.message);
              }
            } finally {
              if (isMounted) {
                setIsGoogleSubmitting(false);
              }
            }
          },
          onError: (err) => {
            if (isMounted) {
              setError(err.message);
            }
          },
        });
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      }
    }

    initializeGoogleButton();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, [googleClientId, navigate]);

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

        {googleClientId ? (
          <div className="space-y-3">
            <div
              ref={googleButtonRef}
              className="flex min-h-14 w-full items-center justify-center overflow-hidden rounded-[999px] bg-white"
            />
            {isGoogleSubmitting ? (
              <p className="text-center text-[14px] text-[#6E6E6E]">Signing in with Google...</p>
            ) : null}
          </div>
        ) : (
          <div className="rounded-[14px] border border-[#E2E7F0] bg-[#F7F9FC] px-4 py-4 text-center text-[15px] text-[#667085]">
            Google Sign-In is unavailable because `REACT_APP_GOOGLE_CLIENT_ID` is not configured.
          </div>
        )}

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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="h-14 w-full rounded-[8px] border border-[#D8D8D8] px-4 pr-12 text-[18px] text-[#1D1D1F] outline-none transition-colors placeholder:text-[#A2A2A2] focus:border-[#1A8CF0]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#667085] transition-colors hover:bg-[#F2F4F7] hover:text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#1A8CF0] focus:ring-offset-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M10.58 10.58a2 2 0 002.84 2.84M9.88 4.24A9.77 9.77 0 0112 4c5.25 0 8.5 4.5 9.5 8a11.76 11.76 0 01-2.34 4.16M6.54 6.54C4.49 7.89 3.18 10.02 2.5 12c1 3.5 4.25 8 9.5 8 1.54 0 2.9-.39 4.08-1.03"
                    />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.5 12S5.75 4 12 4s9.5 8 9.5 8-3.25 8-9.5 8-9.5-8-9.5-8z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </label>

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

          <div className="flex items-center justify-center gap-3 text-[15px]">
            <Link
              to="/forgot-password"
              className="font-medium text-[#1A8CF0] no-underline transition-colors hover:text-[#0F7FDE]"
            >
              Forget Password
            </Link>
            <span className="font-medium text-[#98A2B3]">OR</span>
            <Link
              to="/signup"
              className="font-medium text-[#1A8CF0] no-underline transition-colors hover:text-[#0F7FDE]"
            >
              Create new account
            </Link>
          </div>
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
