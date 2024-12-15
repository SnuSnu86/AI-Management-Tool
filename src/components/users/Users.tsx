import React, { useState } from 'react';
import { UserTable } from './UserTable';
import { AddUserButton } from './AddUserButton';
import { SearchBar } from './SearchBar';
import { useFirebaseUsers } from '../../hooks/useFirebaseUsers';
import LoadingSpinner from '../common/LoadingSpinner';
import { FormError } from '../auth/common/FormError';

const Users = () => {
  const { users, isLoading, error } = useFirebaseUsers();
  const [searchQuery, setSearchQuery] = useState('');
  const isAdmin = true; // In a real app, this would come from auth context

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = () => {
    // Implement user creation logic
    console.log('Add user');
  };

  const handleEditUser = (userId: string) => {
    // Implement user edit logic
    console.log('Edit user', userId);
  };

  const handleDeleteUser = (userId: string) => {
    // Implement user deletion logic
    console.log('Delete user', userId);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        {isAdmin && <AddUserButton onAdd={handleAddUser} />}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {error ? (
          <div className="p-6">
            <FormError message={error} />
          </div>
        ) : (
          <UserTable
            users={filteredUsers}
            isAdmin={isAdmin}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        )}
      </div>
    </div>
  );
};

export default Users;