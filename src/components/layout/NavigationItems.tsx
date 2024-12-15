import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const NavigationItems = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { name: t('nav.dashboard'), path: '/' },
    { name: t('nav.modelSettings'), path: '/model-settings' },
    { name: t('nav.dataManagement'), path: '/data-management' },
    { name: t('nav.analytics'), path: '/analytics' },
    { name: t('nav.users'), path: '/users' },
    { name: t('nav.settings'), path: '/settings' }
  ];

  return (
    <nav className="flex space-x-4">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
              isActive
                ? 'text-indigo-600 bg-indigo-50'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};