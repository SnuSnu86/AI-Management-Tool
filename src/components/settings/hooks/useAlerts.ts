import { useState } from 'react';

interface AlertSettings {
  displayMethod: 'popup' | 'banner' | 'silent';
  sound: boolean;
  dndStart: string;
  dndEnd: string;
}

export const useAlerts = () => {
  const [settings, setSettings] = useState<AlertSettings>({
    displayMethod: 'popup',
    sound: true,
    dndStart: '22:00',
    dndEnd: '07:00',
  });

  const updateSetting = <K extends keyof AlertSettings>(
    key: K,
    value: AlertSettings[K]
  ) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    settings,
    updateSetting,
  };
};