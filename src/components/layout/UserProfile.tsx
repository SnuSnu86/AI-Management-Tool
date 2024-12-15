import React from 'react';

export const UserProfile = () => {
  const user = {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  };

  return (
    <div className="flex items-center">
      <img
        className="h-8 w-8 rounded-full"
        src={user.avatar}
        alt={user.name}
      />
      <span className="ml-2 text-sm font-medium text-gray-700">{user.name}</span>
    </div>
  );
};