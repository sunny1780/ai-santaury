const NOTIFICATIONS_KEY = 'appNotificationsByRecipient';

function readStore() {
  try {
    const raw = localStorage.getItem(NOTIFICATIONS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

function writeStore(store) {
  try {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(store));
    window.dispatchEvent(new Event('notifications-updated'));
  } catch (error) {
    // Ignore storage write failures.
  }
}

export function getAuthUser() {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

export function getUserRecipientKeys(user = getAuthUser()) {
  if (!user) return [];

  return [user.id, user.email, user.role ? `role:${user.role}` : null]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase());
}

export function addNotification({ recipient, text, type = 'info', createdAt = new Date().toISOString() }) {
  if (!recipient || !text) return;

  const recipientKey = String(recipient).toLowerCase();
  const store = readStore();
  const current = Array.isArray(store[recipientKey]) ? store[recipientKey] : [];

  store[recipientKey] = [
    {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text,
      type,
      createdAt,
    },
    ...current,
  ].slice(0, 100);

  writeStore(store);
}

export function addCurrentUserNotification(notification) {
  const authUser = getAuthUser();
  const recipients = getUserRecipientKeys(authUser);

  recipients.forEach((recipient) => {
    addNotification({ ...notification, recipient });
  });
}

export function getCurrentUserNotifications() {
  const store = readStore();
  const recipients = getUserRecipientKeys();
  const seen = new Set();

  return recipients
    .flatMap((recipient) => (Array.isArray(store[recipient]) ? store[recipient] : []))
    .filter((notification) => {
      if (!notification?.id || seen.has(notification.id)) return false;
      seen.add(notification.id);
      return true;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function formatNotificationTime(value) {
  if (!value) return '--';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return '--';

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
