import { useState } from 'react';
import Heading2 from './Headings';
import Description from './Descriptions';

const faqs = [
  {
    question: 'What does Mimicked do?',
    answer: '',
  },
  {
    question: 'How do I set up the master and slave tabs?',
    answer: 'Simply toggle the "Master Tab" switch for the main tab and "Slave Tab" for the others. The master tab controls all actions, and the slave tabs will mirror those actions automatically.',
  },
  {
    question: 'Can I choose how many slave tabs to create?',
    answer: 'Yes! You can specify the exact number of slave tabs by entering the desired number and clicking the "Mimic" button.',
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-[#E5E7EB]">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center gap-4 py-4 sm:py-6 bg-transparent border-none cursor-pointer text-left"
    >
      <span
        className="text-[14px] sm:text-[16px] font-semibold text-[#162D66]"
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
          className="text-[13px] sm:text-[14px] font-normal text-[#6B7280] m-0"
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
          Dedicated volunteers working tirelessly to make Mrija Norway a welcoming home for our community
        </Description>
      </div>

      {/* FAQ List */}
      <div className="max-w-[800px] mx-auto">
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
