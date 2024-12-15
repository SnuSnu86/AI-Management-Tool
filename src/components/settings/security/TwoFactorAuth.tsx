import React, { useState } from 'react';
import { Shield, Copy } from 'lucide-react';
import { SettingsCard } from '../common/SettingsCard';
import { use2FA } from '../hooks/use2FA';

export const TwoFactorAuth = () => {
  const { enabled, backupCodes, toggleEnabled, setupComplete } = use2FA();
  const [showBackupCodes, setShowBackupCodes] = useState(false);

  return (
    <SettingsCard
      title="Two-Factor Authentication"
      icon={<Shield className="h-5 w-5" />}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Enable 2FA</span>
          <button
            onClick={toggleEnabled}
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

        {enabled && setupComplete && (
          <div className="mt-4">
            <button
              onClick={() => setShowBackupCodes(!showBackupCodes)}
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              {showBackupCodes ? 'Hide' : 'Show'} Backup Codes
            </button>

            {showBackupCodes && (
              <div className="mt-2 p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Backup Codes</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(backupCodes.join('\n'))}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {backupCodes.map((code, index) => (
                    <code key={index} className="text-sm text-gray-600">
                      {code}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </SettingsCard>
  );
};