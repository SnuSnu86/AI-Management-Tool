import { useState, useCallback } from 'react';

export const useAutoLogout = () => {
  const [enabled, setEnabled] = useState(false);
  const [timeout, setTimeout] = useState(15);

  const handleTimeout = useCallback((value: number) => {
    setTimeout(value);
    if (enabled) {
      // In a real app, this would update the session timeout
      console.log(`Setting auto-logout timeout to ${value} minutes`);
    }
  }, [enabled]);

  return {
    enabled,
    timeout,
    setEnabled,
    setTimeout: handleTimeout,
  };
};