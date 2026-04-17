import { useEffect, useState } from 'react';
import { getMonthlyWatchProgress, getProgressLevel } from '../../utils/watchProgress';

const levelClass = [
  'bg-[#EFF6FF]',
  'bg-[#D8E8FF]',
  'bg-[#93C5FD]',
  'bg-[#3B82F6]',
  'bg-[#1E40AF]',
];

const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function ProgressHeatmap({ compact = false }) {
  const [progress, setProgress] = useState(() => getMonthlyWatchProgress());
  const labelGapClass = compact ? 'gap-2 mb-2' : 'gap-3 mb-3';
  const gridGapClass = compact ? 'gap-2' : 'gap-3';
  const cellClass = compact ? 'h-8 rounded-[10px]' : 'h-11 rounded-lg';
  const legendClass = compact ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]';
  const dayLabelStyle = compact
    ? {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.005em',
        height: '16px',
      }
    : {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.005em',
        height: '20px',
      };

  useEffect(() => {
    function syncProgress() {
      setProgress(getMonthlyWatchProgress());
    }

    syncProgress();
    window.addEventListener('storage', syncProgress);
    window.addEventListener('watch-progress-updated', syncProgress);

    return () => {
      window.removeEventListener('storage', syncProgress);
      window.removeEventListener('watch-progress-updated', syncProgress);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h3
          className="m-0 text-[#111827]"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.005em',
          }}
        >
          My Progress
        </h3>
        <span className="text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {progress.monthLabel}
        </span>
      </div>

      <div className="h-px bg-[#E5E7EB] my-3" />

      <div className={`grid grid-cols-7 ${labelGapClass}`}>
        {dayLabels.map((day) => (
          <span
            key={day}
            className="rounded-[4px] text-[#374151] flex items-center justify-center"
            style={dayLabelStyle}
          >
            {day}
          </span>
        ))}
      </div>

      <div className={`flex flex-col ${compact ? 'gap-2' : 'gap-3'}`}>
        {progress.weeks.map((week, weekIndex) => (
          <div key={weekIndex} className={`grid grid-cols-7 ${gridGapClass}`}>
            {week.map((day) => {
              const level = getProgressLevel(day.totalSeconds);

              return (
                <div
                  key={day.dateKey}
                  title={`${day.dateKey}: ${Math.floor(day.totalSeconds / 60)} min watched`}
                  className={[
                    cellClass,
                    'transition-colors',
                    day.isCurrentMonth ? levelClass[level] : 'bg-[#F8FAFC]',
                  ].join(' ')}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className={`flex items-center justify-center gap-2 ${compact ? 'mt-3' : 'mt-4'}`}>
        <span className="text-xs text-[#374151] mr-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Low
        </span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className={`${legendClass} rounded-[4px] inline-block ${levelClass[level]}`} />
        ))}
        <span className="text-xs text-[#374151] ml-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Full
        </span>
      </div>
    </>
  );
}
