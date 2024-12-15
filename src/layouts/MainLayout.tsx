import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { EmailVerificationNotice } from '../components/auth/verification/EmailVerificationNotice';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <EmailVerificationNotice />
      <main>
        <Outlet />
      </main>
    </div>
  );
};