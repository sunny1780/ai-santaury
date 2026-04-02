import Sidebaar from './Sidebaar';

export default function InstSettings() {
  const sectionHeadingStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.005em',
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebaar />

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <h1
          className="text-[32px] font-semibold text-[#111827] m-0 mb-6"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Settings
        </h1>

        <div className="space-y-4">
          {/* Personal Information */}
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
            <div className="p-7 border-r border-[#E5E7EB]">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Personal Information
              </h2>
              <p className="mt-3 text-base text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                The information associated with your account.
              </p>
            </div>

            <div className="p-7 space-y-4">
              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  First name
                </span>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm outline-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Last name <span className="text-[#9CA3AF] font-normal">(optional)</span>
                </span>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm outline-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  className="rounded-full px-6 py-2.5 text-sm font-medium bg-[#EEF2F7] text-[#C0C7D1]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Change Password */}
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
            <div className="p-7 border-r border-[#E5E7EB]">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Change Password
              </h2>
              <p className="mt-3 text-base text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We recommend that you periodically update your password to help prevent unauthorized access to your account.
              </p>
            </div>

            <div className="p-7 space-y-4">
              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Current Password
                </span>
                <input
                  type="password"
                  placeholder="Your Current Password"
                  className="w-full rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm outline-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  New Password
                </span>
                <input
                  type="password"
                  placeholder="Your New Password"
                  className="w-full rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm outline-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  New Password
                </span>
                <input
                  type="password"
                  placeholder="Confirm Your New Password"
                  className="w-full rounded-full border border-[#D1D5DB] px-4 py-2.5 text-sm outline-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
              </label>

              <div className="text-sm text-[#6B7280] space-y-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <p className="m-0">✓ Must contain at least 8 characters</p>
                <p className="m-0">✓ Must contain uppercase, lowercase letters, and numbers</p>
                <p className="m-0">✕ If less than 12 characters, must contain a special character</p>
                <p className="m-0">✕ Both password must match</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  className="rounded-full px-6 py-2.5 text-sm font-medium bg-[#EEF2F7] text-[#C0C7D1]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Logout */}
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
            <div className="p-7 border-r border-[#E5E7EB] flex items-center">
              <h2 className="m-0 text-[#111827]" style={sectionHeadingStyle}>
                Logout
              </h2>
            </div>
            <div className="p-7 flex items-center">
              <button
                type="button"
                className="w-full rounded-full bg-[#E24A6A] text-white py-2.5 text-base font-medium"
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
