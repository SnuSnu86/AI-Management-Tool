import { useState } from 'react';

type NotificationFrequency = 'immediate' | 'daily' | 'weekly' | 'disabled';

interface NotificationPreferences {
  [key: string]: NotificationFrequency;
}

export const useNotifications = () => {
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    system_updates: 'immediate',
    security_alerts: 'immediate',
    newsletters: 'weekly',
  });

  const updatePreference = (key: string, value: NotificationFrequency) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    preferences,
    updatePreference,
  };
};