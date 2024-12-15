import { useState } from 'react';

export const useWordManager = () => {
  const [words, setWords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !words.includes(trimmedValue)) {
      setWords([...words, trimmedValue]);
      setInputValue('');
    }
  };

  const handleDelete = (wordToDelete: string) => {
    setWords(words.filter(word => word !== wordToDelete));
  };

  return {
    words,
    inputValue,
    setInputValue,
    handleAdd,
    handleDelete,
  };
};