import React from 'react';
import { AlertCircle } from 'lucide-react';
import { SettingsCard } from '../common/SettingsCard';
import { useAlerts } from '../hooks/useAlerts';
import { TimeRangePicker } from '../common/TimeRangePicker';

export const AlertSettings = () => {
  const { settings, updateSetting } = useAlerts();

  return (
    <SettingsCard
      title="System Alert Settings"
      icon={<AlertCircle className="h-5 w-5" />}
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Method
          </label>
          <select
            value={settings.displayMethod}
            onChange={(e) => updateSetting('displayMethod', e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="popup">Pop-up</option>
            <option value="banner">Banner</option>
            <option value="silent">Silent</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alert Sound
          </label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => updateSetting('sound', !settings.sound)}
              className={`${
                settings.sound ? 'bg-indigo-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  settings.sound ? 'translate-x-5' : 'translate-x-0'
                } inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out`}
              />
            </button>
            <span className="text-sm text-gray-700">
              {settings.sound ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do Not Disturb
          </label>
          <TimeRangePicker
            startTime={settings.dndStart}
            endTime={settings.dndEnd}
            onStartChange={(time) => updateSetting('dndStart', time)}
            onEndChange={(time) => updateSetting('dndEnd', time)}
          />
        </div>
      </div>
    </SettingsCard>
  );
};