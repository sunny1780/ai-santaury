function escapeSvgText(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function getCourseCardImage(course) {
  if (course?.thumbnailUrl) {
    return course.thumbnailUrl;
  }

  const title = escapeSvgText(course?.title || 'Course');
  const category = escapeSvgText(course?.subCategory || course?.category || 'Learning');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0F172A" />
          <stop offset="50%" stop-color="#1D4ED8" />
          <stop offset="100%" stop-color="#60A5FA" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bg)" rx="28" />
      <circle cx="670" cy="95" r="95" fill="rgba(255,255,255,0.12)" />
      <circle cx="120" cy="360" r="120" fill="rgba(255,255,255,0.1)" />
      <text x="56" y="92" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#DBEAFE">${category}</text>
      <text x="56" y="192" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#FFFFFF">${title}</text>
      <text x="56" y="250" font-family="Arial, sans-serif" font-size="22" fill="#E0F2FE">AI Sanctuary</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function getCourseImageAlt(course) {
  return course?.thumbnailFileName || `${course?.title || 'Course'} thumbnail`;
}
