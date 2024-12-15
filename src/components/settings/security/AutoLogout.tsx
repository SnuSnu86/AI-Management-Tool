import React from 'react';
import { Clock } from 'lucide-react';
import { SettingsCard } from '../common/SettingsCard';
import { useAutoLogout } from '../hooks/useAutoLogout';

export const AutoLogout = () => {
  const { enabled, timeout, setEnabled, setTimeout } = useAutoLogout();

  return (
    <SettingsCard
      title="Auto-Logout Configuration"
      icon={<Clock className="h-5 w-5" />}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Enable Auto-Logout</span>
          <button
            onClick={() => setEnabled(!enabled)}
            className={`${
              enabled ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                enabled ? 'translate-x-5' : 'translate-x-0'
              } inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out`}
            />
          </button>
        </div>

        {enabled && (
          <div>
            <label htmlFor="timeout" className="block text-sm font-medium text-gray-700">
              Timeout Duration (minutes)
            </label>
            <input
              type="range"
              id="timeout"
              min="5"
              max="60"
              step="5"
              value={timeout}
              onChange={(e) => setTimeout(parseInt(e.target.value))}
              className="mt-2 w-full"
            />
            <div className="mt-1 text-sm text-gray-500 text-right">{timeout} minutes</div>
          </div>
        )}
      </div>
    </SettingsCard>
  );
};