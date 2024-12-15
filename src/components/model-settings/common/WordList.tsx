import React from 'react';
import { X } from 'lucide-react';

interface WordListProps {
  words: string[];
  onDelete: (word: string) => void;
}

export const WordList: React.FC<WordListProps> = ({ words, onDelete }) => {
  return (
    <div className="mt-4 max-h-60 overflow-y-auto">
      <div className="space-y-2">
        {words.map((word) => (
          <div
            key={word}
            className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md"
          >
            <span className="text-gray-700">{word}</span>
            <button
              onClick={() => onDelete(word)}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};