import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { formatPhoneNumber, isValidPhoneNumber } from '../utils/phoneUtils';

export const TransferConfig = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeNumber, setActiveNumber] = useState('');
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    setError('');
  };

  const handleUpdate = () => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number (XXX-XXX-XXXX)');
      return;
    }
    setActiveNumber(phoneNumber);
    setLastUpdate(new Date().toLocaleString());
    setPhoneNumber('');
  };

  const handleTest = () => {
    // Implement test functionality
    alert('Testing connection to ' + activeNumber);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Call Transfer Configuration
      </h2>

      <div className="space-y-4">
        {activeNumber && (
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center text-gray-700">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">Active Transfer Number:</span>
              <span className="ml-2">{activeNumber}</span>
            </div>
            {lastUpdate && (
              <p className="text-sm text-gray-500 mt-1">
                Last updated: {lastUpdate}
              </p>
            )}
          </div>
        )}

        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="XXX-XXX-XXXX"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Update
          </button>
        </div>

        {activeNumber && (
          <button
            onClick={handleTest}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Test Number
          </button>
        )}
      </div>
    </div>
  );
};