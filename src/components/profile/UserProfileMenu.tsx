import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { Settings, User, Camera, LogOut } from 'lucide-react';
import { ProfilePictureModal } from './ProfilePictureModal';

export const UserProfileMenu = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showPictureModal, setShowPictureModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  if (!user) return null;

  const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`;

  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <img
          src={avatarUrl}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover border-2 border-white hover:border-indigo-500 transition-colors duration-200"
        />
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-700">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
          style={{ transform: 'translateY(0)' }}
        >
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4 mr-3" />
            {t('profile.viewProfile')}
          </Link>
          
          <Link
            to="/settings/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="h-4 w-4 mr-3" />
            {t('profile.editProfile')}
          </Link>
          
          <button
            onClick={() => {
              setShowPictureModal(true);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Camera className="h-4 w-4 mr-3" />
            {t('profile.changePicture')}
          </button>

          <hr className="my-1" />
          
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-3" />
            {t('auth.signOut')}
          </button>
        </div>
      )}

      {showPictureModal && (
        <ProfilePictureModal
          onClose={() => setShowPictureModal(false)}
          currentAvatar={avatarUrl}
        />
      )}
    </div>
  );
};