import React from 'react';
import { Plus } from 'lucide-react';

interface WordInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  placeholder: string;
  buttonText: string;
}

export const WordInput: React.FC<WordInputProps> = ({
  value,
  onChange,
  onAdd,
  placeholder,
  buttonText,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAdd();
    }
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={onAdd}
        disabled={!value.trim()}
        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="h-4 w-4 mr-1" />
        {buttonText}
      </button>
    </div>
  );
};