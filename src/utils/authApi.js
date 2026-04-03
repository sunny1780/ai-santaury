const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
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

export function persistAuth(data) {
  localStorage.setItem('authToken', data.token);
  localStorage.setItem('authUser', JSON.stringify(data.user));
}

export function getDashboardPath(role) {
  return role === 'instructor' ? '/inst/dashboard' : '/dashboard';
}
