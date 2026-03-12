import { useState } from 'react';
import Heading2 from './Headings';
import Description from './Descriptions';

const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Sign up with a quick form, choose a course, and begin learning right away.',
  },
  {
    question: 'Do I need prior experience?',
    answer: 'No, our programs are beginner-friendly with step-by-step guidance.',
  },
  {
    question: 'What courses are available?',
    answer: 'UI/UX Design, AI Tools, MERN Stack, SEO, Graphic Design, Professional English, and more.',
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes, complete the course and receive a digital certificate to showcase your skills.',
  },
  {
    question: 'How can I get support?',
    answer: 'Join live sessions, connect with mentors, and reach out via email or community channels.',
  },
  {
    question: 'Is it suitable for students in Pakistan?',
    answer: 'Absolutely — designed especially for youth and communities here, with flexible timing.',
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-[#E5E7EB]">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center gap-4 py-4 sm:py-6 bg-transparent border-none cursor-pointer text-left"
    >
      <span
        className="text-[14px] sm:text-[16px] font-semibold text-black"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
      >
        {question}
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#285ADE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    {isOpen && answer && (
      <div className="pb-4 sm:pb-6">
        <p
          className="text-[13px] sm:text-[14px] font-normal text-black m-0"
          style={{ fontFamily: 'Inter, sans-serif', lineHeight: '22px' }}
        >
          {answer}
        </p>
      </div>
    )}
  </div>
);

export default function HomeFaqs() {
  const [openIndex, setOpenIndex] = useState(1);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-[#F6F9FF]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-8 lg:mb-12">
        <Heading2>Frequently Asked Questions</Heading2>
        <Description className="text-center">
          Quick answers to common questions about learning with us.
        </Description>
      </div>

      {/* FAQ List */}
      <div className="max-w-[1080px] mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
