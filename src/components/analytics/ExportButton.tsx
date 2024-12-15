import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface ExportButtonProps {
  onExport: (format: 'csv' | 'pdf') => Promise<void>;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ onExport }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = async (format: 'csv' | 'pdf') => {
    await onExport(format);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        <Download className="h-4 w-4 mr-2" />
        Export
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => handleExport('csv')}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Export as CSV
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Export as PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};