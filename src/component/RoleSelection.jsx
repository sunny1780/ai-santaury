import { useNavigate } from 'react-router-dom';
import AuthShell from './AuthShell';

export default function RoleSelection() {
  const role = 'student';
  const navigate = useNavigate();

  return (
    <AuthShell>
      <div className="w-full max-w-[420px]">
        <div className="mb-10">
          <h1 className="text-[34px] font-semibold leading-[1.15] text-[#1D1D1F] sm:text-[44px] lg:text-[50px]">
            Welcome! Let&rsquo;s Get Started
          </h1>
          <p className="mt-3 text-[18px] text-[#7B7F8A]">Just a quick question</p>
        </div>

        <fieldset className="border-0 p-0">
          <legend className="mb-6 text-[20px] font-medium text-[#1D1D1F]">
            You are signing up as a student.
          </legend>

          <label className="flex cursor-default items-center gap-4">
            <input
              type="radio"
              name="role"
              value="student"
              checked
              readOnly
              className="h-5 w-5 accent-[#1A8CF0]"
            />
            <span className="text-[24px] text-[#3A3E47] sm:text-[28px]">Student</span>
          </label>
        </fieldset>

        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem('signupRole', role);
            navigate('/signup/details', { state: { role } });
          }}
          className="mt-12 h-14 w-full rounded-[14px] bg-[#1A8CF0] text-[24px] font-medium text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-[#0F7FDE]"
        >
          Next
        </button>
      </div>
    </AuthShell>
  );
}
