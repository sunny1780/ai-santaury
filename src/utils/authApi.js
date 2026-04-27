const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

async function request(path, options = {}) {
  const token = localStorage.getItem('authToken');

  const controller = new AbortController();
  // Production/serverless cold starts can take longer on first request.
  const timeoutId = setTimeout(() => controller.abort(), 45000);

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
      signal: controller.signal,
      ...options,
    });
  } catch (fetchError) {
    if (fetchError.name === 'AbortError') {
      throw new Error('Server response mein zyada time lag raha hai. Thori dair baad dobara try karein.');
    }
    throw new Error('Unable to connect to server. Please try again.');
  } finally {
    clearTimeout(timeoutId);
  }

  let data = {};
  let rawText = '';

  try {
    data = await response.json();
  } catch (error) {
    try {
      rawText = await response.text();
    } catch (readError) {
      rawText = '';
    }
  }

  if (!response.ok) {
    const normalizedText = rawText.trim();
    const fallbackMessage =
      response.status === 404
        ? `Endpoint not found (${response.status}).`
        : `Request failed (${response.status}).`;

    throw new Error(
      data.message ||
      (normalizedText && !/^<!doctype html/i.test(normalizedText) ? normalizedText : '') ||
      fallbackMessage
    );
  }

  return data;
}

export function signup(payload) {
  return request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function login(payload) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function googleAuth(payload) {
  return request('/auth/google', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function forgotPassword(payload) {
  return request('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function resetPassword(payload) {
  return request('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function changePassword(payload) {
  return request('/auth/change-password', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function persistAuth(data) {
  localStorage.setItem('authToken', data.token);
  localStorage.setItem('authUser', JSON.stringify(data.user));
}

export function getDashboardPath(role) {
  if (role === 'instructor') return '/inst/dashboard';
  if (role === 'admin') return '/admin/courses';
  return '/dashboard';
}

export function createCourse(payload) {
  return request('/courses', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function getMyCourses() {
  return request('/courses/my');
}

export function getMyCourseById(courseId) {
  return request(`/courses/my/${courseId}`);
}

export function getApprovedCourses() {
  return request('/courses/public');
}

export function getApprovedCourseById(courseId) {
  return request(`/courses/public/${courseId}`);
}

export function enrollInCourse(courseId) {
  return request(`/courses/${courseId}/enroll`, {
    method: 'POST',
  });
}

export function getEnrolledCourses() {
  return request('/courses/enrolled');
}

export function getEnrolledCourseById(courseId) {
  return request(`/courses/enrolled/${courseId}`);
}

export function getPendingCourses() {
  return request('/courses/pending');
}

export function updateCourseStatus(courseId, payload) {
  return request(`/courses/${courseId}/status`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export function updateCourseLectureVideo(courseId, payload) {
  return request(`/courses/${courseId}/lecture-video`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}
