import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState<'en' | 'de'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'en' | 'de') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage };
};