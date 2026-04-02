import { useState } from 'react';
import Sidebaar from './Sidebaar';

const steps = [
  {
    key: 'basic',
    label: 'Basic Information',
    Icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'advance',
    label: 'Advance Information',
    Icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'curriculum',
    label: 'Curriculum',
    Icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="2" y="5" width="14" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'publish',
    label: 'Publish Course',
    Icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const selectClass =
  'w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]';

const inputClass =
  'w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]';

const CheckCircleIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="10" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
    <path d="M8 12l2.5 2.5L16 9" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function RichTextToolbar() {
  const btn =
    'p-1.5 rounded text-[#374151] hover:bg-[#F3F4F6] transition-colors';
  return (
    <div
      className="flex flex-wrap items-center gap-0.5 border-t border-[#E5E7EB] bg-[#FAFAFA] px-2 py-1.5 rounded-b-lg"
      role="toolbar"
      aria-label="Text formatting"
    >
      <button type="button" className={`${btn} font-bold text-sm`}>
        B
      </button>
      <button type="button" className={`${btn} italic text-sm`}>
        I
      </button>
      <button type="button" className={`${btn} underline text-sm`}>
        U
      </button>
      <button type="button" className={`${btn} line-through text-sm`}>
        S
      </button>
      <button type="button" className={btn} aria-label="Link">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      </button>
      <button type="button" className={btn} aria-label="Bullet list">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6h11M9 12h11M9 18h11" strokeLinecap="round" />
          <circle cx="5" cy="6" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="5" cy="18" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </button>
      <button type="button" className={btn} aria-label="Numbered list">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 6h10M10 12h10M10 18h10" strokeLinecap="round" />
          <path d="M4 7V5M4 5v4M6 5h-2" strokeLinecap="round" />
          <path d="M5 13v6M3 11l2 2 2-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

const LIST_MAX = 8;

function ListBlock({ title, items, setItems, placeholder }) {
  const add = () => {
    setItems((prev) => (prev.length < LIST_MAX ? [...prev, ''] : prev));
  };

  const update = (i, v) => {
    setItems((prev) => {
      const n = [...prev];
      n[i] = v;
      return n;
    });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="m-0 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {title}{' '}
          <span className="font-normal text-[#6B7280]">
            ({items.length}/{LIST_MAX})
          </span>
        </h3>
        <button
          type="button"
          onClick={add}
          disabled={items.length >= LIST_MAX}
          className="text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          + Add new
        </button>
      </div>
      <div className="space-y-2.5">
        {items.map((val, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span
              className="w-7 shrink-0 pt-2.5 text-xs font-medium text-[#9CA3AF] tabular-nums"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="relative flex-1 min-w-0">
              <input
                type="text"
                maxLength={120}
                value={val}
                onChange={(e) => update(i, e.target.value)}
                placeholder={placeholder}
                className={`${inputClass} pr-14`}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] pointer-events-none"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {val.length}/120
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PublishNew() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [courseLang, setCourseLang] = useState('');
  const [subtitleLang, setSubtitleLang] = useState('');
  const [level, setLevel] = useState('');
  const [durationValue, setDurationValue] = useState('');
  const [durationUnit, setDurationUnit] = useState('Day');

  const [courseDescription, setCourseDescription] = useState('');
  const [teachList, setTeachList] = useState(['', '', '', '']);
  const [whoForList, setWhoForList] = useState(['', '', '', '']);
  const [reqList, setReqList] = useState(['', '', '', '']);

  /** Curriculum: which lecture row has "Contents" open (0, 1, or null) */
  const [openLectureMenu, setOpenLectureMenu] = useState(1);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [lectureVideoSection, setLectureVideoSection] = useState('');
  const [lectureVideoFileName, setLectureVideoFileName] = useState('');

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setLectureVideoSection('');
    setLectureVideoFileName('');
  };

  const canSubmitLectureVideo = lectureVideoSection.trim().length > 0 && lectureVideoFileName.length > 0;

  const [attachModalOpen, setAttachModalOpen] = useState(false);
  const [lectureAttachFileName, setLectureAttachFileName] = useState('');

  const closeAttachModal = () => {
    setAttachModalOpen(false);
    setLectureAttachFileName('');
  };

  const canSubmitLectureAttachFile = lectureAttachFileName.length > 0;

  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const [lectureDescriptionText, setLectureDescriptionText] = useState('');

  const closeDescriptionModal = () => {
    setDescriptionModalOpen(false);
    setLectureDescriptionText('');
  };

  const canSubmitLectureDescription = lectureDescriptionText.trim().length > 0;

  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [lectureNotesText, setLectureNotesText] = useState('');
  const [lectureNotesFileName, setLectureNotesFileName] = useState('');

  const closeNotesModal = () => {
    setNotesModalOpen(false);
    setLectureNotesText('');
    setLectureNotesFileName('');
  };

  const canSubmitLectureNotes = lectureNotesText.trim().length > 0 && lectureNotesFileName.length > 0;

  return (
    <div className="min-h-screen bg-[#F6F8FB] flex">
      <Sidebaar />

      <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-10 pt-0 pb-6 sm:pb-8">
        <div className="mb-5 sm:mb-6 flex flex-col gap-3">
          <div className="-mx-5 sm:-mx-8 lg:-mx-10 px-5 sm:px-8 lg:px-10 py-2.5 bg-white flex items-center justify-end gap-3 border-b border-[#EEF2F7]">
            <div className="w-9 h-9 rounded-full bg-[#CBD5F5] shrink-0" />
            <span className="text-sm font-medium text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              John Doe
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-[#111827] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Publish New Course
          </h1>
        </div>

        <nav
          className="flex flex-wrap gap-2 sm:gap-6 border-b border-[#E5E7EB] pb-0 mb-6 sm:mb-8"
          aria-label="Course publish steps"
        >
          {steps.map((step, index) => {
            const active = index === activeStep;
            const done = index < activeStep;
            const Icon = step.Icon;
            return (
              <button
                key={step.key}
                type="button"
                onClick={() => setActiveStep(index)}
                className={[
                  'flex items-center gap-2 pb-3 px-1 -mb-px border-b-2 text-sm font-medium transition-colors',
                  active
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : done
                      ? 'border-transparent text-[#16A34A]'
                      : 'border-transparent text-[#6B7280] hover:text-[#111827]',
                ].join(' ')}
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {done ? (
                  <CheckCircleIcon className="h-5 w-5 shrink-0" />
                ) : (
                  <Icon className="h-5 w-5 shrink-0" />
                )}
                <span className="whitespace-nowrap">{step.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm p-5 sm:p-6 lg:p-8">
          {activeStep === 0 && (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setActiveStep((s) => Math.min(3, s + 1));
              }}
            >
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={80}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Your course title"
                    className={`${inputClass} pr-16`}
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] pointer-events-none"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {title.length}/80
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Subtitle
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={120}
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Your course subtitle"
                    className={`${inputClass} pr-16`}
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] pointer-events-none"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {subtitle.length}/120
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Course Category
                  </label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    <option value="dev">Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Course Sub-category
                  </label>
                  <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    <option value="fe">Front End</option>
                    <option value="be">Back End</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Course Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="What is primarily taught in your course?"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Course Language
                  </label>
                  <select value={courseLang} onChange={(e) => setCourseLang(e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    <option value="en">English</option>
                    <option value="ur">Urdu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Subtitle Language (Optional)
                  </label>
                  <select value={subtitleLang} onChange={(e) => setSubtitleLang(e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    <option value="en">English</option>
                    <option value="ur">Urdu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Course Level
                  </label>
                  <select value={level} onChange={(e) => setLevel(e.target.value)} className={selectClass}>
                    <option value="">Select...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Durations
                  </label>
                  <div className="flex rounded-lg border border-[#E5E7EB] bg-white overflow-hidden focus-within:ring-1 focus-within:ring-[#2563EB] focus-within:border-[#2563EB]">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={durationValue}
                      onChange={(e) => setDurationValue(e.target.value)}
                      placeholder="Course durations"
                      className="min-w-0 flex-1 border-0 px-3 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
                    />
                    <select
                      value={durationUnit}
                      onChange={(e) => setDurationUnit(e.target.value)}
                      className="border-l border-[#E5E7EB] bg-[#F9FAFB] px-2 py-2 text-sm text-[#111827] focus:outline-none"
                    >
                      <option value="Day">Day</option>
                      <option value="Week">Week</option>
                      <option value="Month">Month</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveStep(0)}
                  className="rounded-lg bg-[#F3F4F6] px-5 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save & next
                </button>
              </div>
            </form>
          )}

          {activeStep === 1 && (
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setActiveStep(2);
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="m-0 mb-3 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Course Thumbnail
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-44 h-36 shrink-0 rounded-xl bg-[#F3F4F6] flex items-center justify-center border border-[#E5E7EB]">
                      <svg className="w-12 h-12 text-[#9CA3AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <circle cx="8.5" cy="10" r="1.5" />
                        <path d="M21 17l-5-5-4 4-3-3-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="m-0 flex-1 text-xs leading-relaxed text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Upload your course Thumbnail hero. Important guidelines: 1200×800 pixels or 12:8 Ratio. Supported format: .jpg,
                      .jpeg, or .png
                    </p>
                  </div>
                  <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#E9F1FF] px-4 py-2.5 text-sm font-medium text-[#2563EB] hover:bg-[#DBEAFE] transition-colors">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M12 16V4m0 0L8 8m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4" strokeLinecap="round" />
                    </svg>
                    Upload image
                    <input type="file" accept=".jpg,.jpeg,.png" className="sr-only" />
                  </label>
                </div>

                <div>
                  <h3 className="m-0 mb-3 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Course Trailer
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-44 h-36 shrink-0 rounded-xl bg-[#F3F4F6] flex items-center justify-center border border-[#E5E7EB]">
                      <svg className="w-12 h-12 text-[#9CA3AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <rect x="3" y="6" width="14" height="12" rx="2" />
                        <path d="M17 10l4-2v8l-4-2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="m-0 flex-1 text-xs leading-relaxed text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Students who watch a well-made promo video are 5X more likely to enroll in your course. Upload a short video that
                      showcases your content.
                    </p>
                  </div>
                  <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#E9F1FF] px-4 py-2.5 text-sm font-medium text-[#2563EB] hover:bg-[#DBEAFE] transition-colors">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M12 16V4m0 0L8 8m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4" strokeLinecap="round" />
                    </svg>
                    Upload Video
                    <input type="file" accept="video/*" className="sr-only" />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="m-0 mb-2 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Course Descriptions
                </h3>
                <div className="rounded-lg border border-[#E5E7EB] overflow-hidden bg-white">
                  <textarea
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    placeholder="Enter your course descriptions"
                    rows={6}
                    className="w-full resize-y border-0 px-3 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-0 min-h-[140px]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  />
                  <RichTextToolbar />
                </div>
              </div>

              <ListBlock
                title="What you will teach in this course"
                items={teachList}
                setItems={setTeachList}
                placeholder="What you will teach in this course..."
              />

              <ListBlock
                title="Who This Course Is For"
                items={whoForList}
                setItems={setWhoForList}
                placeholder="Who this course is for..."
              />

              <ListBlock
                title="Course Requirements"
                items={reqList}
                setItems={setReqList}
                placeholder="List course requirements..."
              />

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep(0)}
                  className="rounded-lg bg-[#F3F4F6] px-5 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save & next
                </button>
              </div>
            </form>
          )}
          {activeStep === 2 && (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setActiveStep(3);
              }}
            >
              <div className="rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] p-4 sm:p-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <button type="button" className="p-1 text-[#111827] hover:bg-white/60 rounded" aria-label="Section menu">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                    </svg>
                  </button>
                  <span className="text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Sections 01: Section name
                  </span>
                </div>

                {[0, 1].map((idx) => {
                  const isOpen = openLectureMenu === idx;
                  return (
                    <div key={idx} className="relative rounded-xl bg-white border border-[#E5E7EB] px-4 py-3.5 sm:px-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 min-h-[44px]">
                        <span className="text-sm font-medium text-[#374151]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          Lecture name
                        </span>
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                          <button
                            type="button"
                            onClick={() => setOpenLectureMenu(isOpen ? null : idx)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F1FF] px-4 py-2 text-sm font-medium text-[#2563EB] hover:bg-[#DBEAFE] transition-colors"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                          >
                            Contents
                            <svg
                              className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden
                            >
                              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          {isOpen && (
                            <>
                              <button
                                type="button"
                                className="p-2 rounded-lg text-[#374151] hover:bg-[#F3F4F6]"
                                aria-label="Edit lecture"
                              >
                                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="p-2 rounded-lg text-[#EF4444] hover:bg-red-50"
                                aria-label="Delete lecture"
                              >
                                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                  <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
                                  <path d="M10 11v6M14 11v6" strokeLinecap="round" />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      {isOpen && (
                        <div className="absolute right-4 top-full z-10 mt-1 w-48 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                          {['Video', 'Attach File', 'Description', 'Lecture Notes'].map((label) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => {
                                if (label === 'Video') {
                                  setVideoModalOpen(true);
                                  setOpenLectureMenu(null);
                                }
                                if (label === 'Attach File') {
                                  setAttachModalOpen(true);
                                  setOpenLectureMenu(null);
                                }
                                if (label === 'Description') {
                                  setDescriptionModalOpen(true);
                                  setOpenLectureMenu(null);
                                }
                                if (label === 'Lecture Notes') {
                                  setNotesModalOpen(true);
                                  setOpenLectureMenu(null);
                                }
                              }}
                              className="w-full px-3 py-2 text-left text-sm text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
                              style={{ fontFamily: 'Manrope, sans-serif' }}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  className="w-full rounded-lg bg-[#E9F1FF] py-3 text-sm font-medium text-[#2563EB] hover:bg-[#DBEAFE] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Add Sections
                </button>
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="rounded-lg bg-[#F3F4F6] px-5 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Save & next
                </button>
              </div>
            </form>
          )}
          {activeStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="m-0 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Message
                </h3>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Welcome Message
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Enter course starting message here..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#2563EB] resize-none"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-medium text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Congratulations Message
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Enter your course completed message here..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#2563EB] resize-none"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="m-0 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Add Instructor (02)
                </h3>

                <div className="mt-4 flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-5 py-3">
                  <svg className="h-4 w-4 text-[#6B7280]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by username"
                    className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Username', role: 'UI/UX Designer', bg: '#86EFAC' },
                    { name: 'Username', role: 'UI/UX Designer', bg: '#93C5FD' },
                  ].map((it, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-[#F3F4F6] rounded-xl px-4 py-3"
                    >
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
                        style={{ background: it.bg }}
                      >
                        <span className="text-xs font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {it.name.slice(0, 1)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-[#111827] truncate" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {it.name}
                        </div>
                        <div className="text-xs text-[#6B7280] truncate" style={{ fontFamily: 'Manrope, sans-serif' }}>
                          {it.role}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="p-2 rounded-full text-[#6B7280] hover:bg-white/60 hover:text-[#EF4444]"
                        aria-label="Remove instructor"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M18 6 6 18" strokeLinecap="round" />
                          <path d="M6 6l12 12" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="rounded-lg bg-[#F3F4F6] px-5 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => {}}
                  className="rounded-lg bg-[#2563EB] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Publish
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {videoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="lecture-video-title">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={closeVideoModal}
            aria-label="Close dialog"
          />
          <div
            className="relative w-full max-w-[480px] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="lecture-video-title"
              className="m-0 text-lg font-bold text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Lecture Video
            </h2>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Section
              </label>
              <div className="flex items-center gap-0 rounded-full border border-[#BFDBFE] bg-white pl-4 pr-1 py-1 focus-within:ring-2 focus-within:ring-[#2563EB]/20">
                <input
                  type="text"
                  value={lectureVideoSection}
                  onChange={(e) => setLectureVideoSection(e.target.value)}
                  placeholder="Write your section name here.."
                  className="min-w-0 flex-1 border-0 bg-transparent py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-0"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <label className="shrink-0 cursor-pointer rounded-full bg-[#1F2937] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#111827] transition-colors">
                  Upload File
                  <input
                    type="file"
                    accept="video/*"
                    className="sr-only"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      setLectureVideoFileName(f ? f.name : '');
                    }}
                  />
                </label>
              </div>
              <p className="mt-2 text-xs text-[#94A3B8]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                All files should be at least 720p and less than 4.0 GB.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={closeVideoModal}
                className="rounded-full bg-[#F3F4F6] px-6 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!canSubmitLectureVideo}
                className="rounded-full bg-[#F1F5F9] px-6 py-2.5 text-sm font-medium text-[#94A3B8] disabled:cursor-not-allowed enabled:bg-[#2563EB] enabled:text-white enabled:hover:bg-[#1D4ED8] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                onClick={() => {
                  if (!canSubmitLectureVideo) return;
                  closeVideoModal();
                }}
              >
                Upload Video
              </button>
            </div>
          </div>
        </div>
      )}

      {attachModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="lecture-attach-title">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={closeAttachModal}
            aria-label="Close dialog"
          />
          <div
            className="relative w-full max-w-[440px] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="lecture-attach-title"
              className="m-0 text-lg font-bold text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Attach File
            </h2>

            <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-4">
              <label className="block cursor-pointer">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6]">
                  <svg className="h-6 w-6 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
                    <path d="M7 10l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5v14" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <p className="m-0 text-sm font-semibold text-[#111827]">Attach File</p>
                  <p className="mt-1 m-0 text-xs text-[#6B7280]">Drag and drop a file or browse file</p>
                </div>
                <input
                  type="file"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setLectureAttachFileName(f ? f.name : '');
                  }}
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={closeAttachModal}
                className="rounded-full bg-[#F3F4F6] px-6 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={!canSubmitLectureAttachFile}
                className="rounded-full bg-[#F1F5F9] px-6 py-2.5 text-sm font-medium text-[#94A3B8] disabled:cursor-not-allowed enabled:bg-[#2563EB] enabled:text-white enabled:hover:bg-[#1D4ED8] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                onClick={() => {
                  if (!canSubmitLectureAttachFile) return;
                  closeAttachModal();
                }}
              >
                Attach File
              </button>
            </div>
          </div>
        </div>
      )}

      {descriptionModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lecture-description-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={closeDescriptionModal}
            aria-label="Close dialog"
          />
          <div
            className="relative w-full max-w-[520px] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="lecture-description-title"
              className="m-0 text-lg font-bold text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Add Lecture Description
            </h2>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Description
              </label>
              <textarea
                value={lectureDescriptionText}
                onChange={(e) => setLectureDescriptionText(e.target.value)}
                placeholder="Write your lecture description here..."
                rows={5}
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-0 resize-y min-h-[160px]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={closeDescriptionModal}
                className="rounded-full bg-[#F3F4F6] px-6 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={!canSubmitLectureDescription}
                className="rounded-full bg-[#F1F5F9] px-6 py-2.5 text-sm font-medium text-[#94A3B8] disabled:cursor-not-allowed enabled:bg-[#2563EB] enabled:text-white enabled:hover:bg-[#1D4ED8] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                onClick={() => {
                  if (!canSubmitLectureDescription) return;
                  closeDescriptionModal();
                }}
              >
                Add Description
              </button>
            </div>
          </div>
        </div>
      )}

      {notesModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lecture-notes-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={closeNotesModal}
            aria-label="Close dialog"
          />
          <div
            className="relative w-full max-w-[520px] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="lecture-notes-title"
              className="m-0 text-lg font-bold text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Add Lecture Notes
            </h2>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Notes
              </label>
              <textarea
                value={lectureNotesText}
                onChange={(e) => setLectureNotesText(e.target.value)}
                placeholder="Write your lecture Notes here..."
                rows={5}
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-0 resize-y min-h-[160px]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              />
            </div>

            <div className="mt-4 rounded-2xl border border-[#E5E7EB] bg-white p-4">
              <label className="block cursor-pointer">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F4F6]">
                  <svg className="h-6 w-6 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
                    <path d="M7 10l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5v14" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <p className="m-0 text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Uploads Notes
                  </p>
                  <p className="mt-1 m-0 text-xs text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Drag and drop a file or browse file
                  </p>
                </div>
                <input
                  type="file"
                  className="sr-only"
                  accept="video/*,.pdf,.doc,.docx,.txt"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setLectureNotesFileName(f ? f.name : '');
                  }}
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={closeNotesModal}
                className="rounded-full bg-[#F3F4F6] px-6 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#E5E7EB] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={!canSubmitLectureNotes}
                className="rounded-full bg-[#F1F5F9] px-6 py-2.5 text-sm font-medium text-[#94A3B8] disabled:cursor-not-allowed enabled:bg-[#2563EB] enabled:text-white enabled:hover:bg-[#1D4ED8] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
                onClick={() => {
                  if (!canSubmitLectureNotes) return;
                  closeNotesModal();
                }}
              >
                Add Notes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
