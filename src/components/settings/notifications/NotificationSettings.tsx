import React from 'react';
import { Bell } from 'lucide-react';
import { SettingsCard } from '../common/SettingsCard';
import { useNotifications } from '../hooks/useNotifications';

export const NotificationSettings = () => {
  const { preferences, updatePreference } = useNotifications();

  return (
    <SettingsCard
      title="Email Notification Preferences"
      icon={<Bell className="h-5 w-5" />}
    >
      <div className="space-y-4">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">
              {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
            <select
              value={value}
              onChange={(e) => updatePreference(key, e.target.value)}
              className="mt-1 block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="immediate">Immediate</option>
              <option value="daily">Daily Digest</option>
              <option value="weekly">Weekly Digest</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
        ))}
      </div>
    </SettingsCard>
  );
};