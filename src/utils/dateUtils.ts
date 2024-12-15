const TIME_UNITS = {
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800
} as const;

export const formatDistanceToNow = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < TIME_UNITS.minute) {
    return 'just now';
  }

  if (diffInSeconds < TIME_UNITS.hour) {
    const minutes = Math.floor(diffInSeconds / TIME_UNITS.minute);
    return `${minutes}m ago`;
  }

  if (diffInSeconds < TIME_UNITS.day) {
    const hours = Math.floor(diffInSeconds / TIME_UNITS.hour);
    return `${hours}h ago`;
  }

  if (diffInSeconds < TIME_UNITS.week) {
    const days = Math.floor(diffInSeconds / TIME_UNITS.day);
    return `${days}d ago`;
  }

  return date.toLocaleDateString();
};

export const formatDateTime = (date: Date): string => {
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};