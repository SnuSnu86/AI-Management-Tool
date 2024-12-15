import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { UserProfileMenu } from '../profile/UserProfileMenu';

export const NavbarActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <button 
        className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
        aria-label="Notifications"
      >
        <Bell className="h-6 w-6" />
      </button>
      <button 
        className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
        aria-label="Settings"
      >
        <Settings className="h-6 w-6" />
      </button>
      <UserProfileMenu />
    </div>
  );
};