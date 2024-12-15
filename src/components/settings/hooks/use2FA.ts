import { useState, useCallback } from 'react';

export const use2FA = () => {
  const [enabled, setEnabled] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
  const [backupCodes] = useState([
    '1234-5678',
    '2345-6789',
    '3456-7890',
    '4567-8901',
    '5678-9012',
    '6789-0123',
  ]);

  const toggleEnabled = useCallback(() => {
    if (!enabled) {
      // In a real app, this would trigger 2FA setup flow
      setEnabled(true);
      setSetupComplete(true);
    } else {
      setEnabled(false);
      setSetupComplete(false);
    }
  }, [enabled]);

  return {
    enabled,
    backupCodes,
    toggleEnabled,
    setupComplete,
  };
};