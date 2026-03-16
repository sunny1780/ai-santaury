import { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heading2 from '../component/Headings';
import Description from '../component/Descriptions';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', text: 'Message sent! We\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Failed to send. Check your connection or try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <section className="px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:py-16 bg-white">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8 sm:mb-10 lg:mb-16">
          <Heading2>Get in Touch</Heading2>
          <p
            className="text-base sm:text-lg font-medium text-[#162D66] text-center"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
          >
            Got a question?
          </p>
          <Description className="text-center">
            Want to join a course? Reach out — we&apos;re happy to help!
          </Description>
        </div>

        {/* Form + Map */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 max-w-[1080px] mx-auto">
          {/* Left - Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-[#162D66] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-2 border-0 border-b-2 border-[#E5E7EB] bg-transparent text-[#162D66] focus:outline-none focus:border-[#162D66] placeholder:text-[#9CA3AF]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#162D66] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-2 border-0 border-b-2 border-[#E5E7EB] bg-transparent text-[#162D66] focus:outline-none focus:border-[#162D66] placeholder:text-[#9CA3AF]"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#162D66] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full py-2 border-0 border-b-2 border-[#E5E7EB] bg-transparent text-[#162D66] focus:outline-none focus:border-[#162D66] placeholder:text-[#9CA3AF] resize-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                  placeholder=""
                />
              </div>
              {status && (
              <p
                className={`text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {status.text}
              </p>
            )}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 rounded-full text-white font-medium disabled:opacity-70"
                style={{ fontFamily: 'Manrope, sans-serif', background: '#326AFD' }}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162D66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p
                    className="text-[14px] leading-[20px] font-semibold text-[#162D66] m-0"
                    style={{ fontFamily: 'Rubik, sans-serif', letterSpacing: '0.005em', fontWeight: 600 }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:learn@aisanctuary.org"
                    className="text-[14px] leading-[20px] font-normal text-[#5A666E] no-underline"
                    style={{ fontFamily: 'Rubik, sans-serif', letterSpacing: '0.005em', fontWeight: 400 }}
                  >
                    learn@aisanctuary.org
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#162D66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p
                    className="text-[14px] leading-[20px] font-semibold text-[#162D66] m-0"
                    style={{ fontFamily: 'Rubik, sans-serif', letterSpacing: '0.005em', fontWeight: 600 }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+923175442479"
                    className="text-[14px] leading-[20px] font-normal text-[#5A666E] no-underline"
                    style={{ fontFamily: 'Rubik, sans-serif', letterSpacing: '0.005em', fontWeight: 400 }}
                  >
                    +92 317 5442479
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="flex-1 w-full min-w-0 h-[260px] sm:h-[320px] lg:h-[400px] rounded-xl overflow-hidden">
            <iframe
              title="AI Sanctuary Location"
              src="https://maps.google.com/maps?q=M.dubai+Tower+Lehtrar+Rd,+Khanna+Pul,+Islamabad,+44000&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
