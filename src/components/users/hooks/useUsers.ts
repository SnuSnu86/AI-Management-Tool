import { useState, useCallback } from 'react';
import { User } from '../../../types/index';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    lastActive: new Date()
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    lastActive: new Date()
  }
];

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const isAdmin = true; // In a real app, this would come from auth context

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = useCallback(() => {
    // Implement user creation logic
    console.log('Add user');
  }, []);

  const handleEditUser = useCallback((user: User) => {
    // Implement user edit logic
    console.log('Edit user', user);
  }, []);

  const handleDeleteUser = useCallback((userId: string) => {
    setUsers(users => users.filter(user => user.id !== userId));
  }, []);

  return {
    users: filteredUsers,
    isAdmin,
    searchQuery,
    setSearchQuery,
    handleAddUser,
    handleEditUser,
    handleDeleteUser,
  };
};