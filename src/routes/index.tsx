import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/forms/RegisterForm';
import { ResetPasswordForm } from '../components/auth/forms/ResetPasswordForm';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load components
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const ModelSettings = React.lazy(() => import('../components/model-settings/ModelSettings'));
const DataManagement = React.lazy(() => import('../components/data-management/DataManagement'));
const Analytics = React.lazy(() => import('../components/analytics/Analytics'));
const Users = React.lazy(() => import('../components/users/Users'));
const Settings = React.lazy(() => import('../components/settings/Settings'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
        </Route>
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/model-settings" element={<ModelSettings />} />
          <Route path="/data-management" element={<DataManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;