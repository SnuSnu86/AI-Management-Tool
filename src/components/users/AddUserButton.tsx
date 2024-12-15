import React from 'react';
import { UserPlus } from 'lucide-react';

interface AddUserButtonProps {
  onAdd: () => void;
}

export const AddUserButton: React.FC<AddUserButtonProps> = ({ onAdd }) => {
  return (
    <button
      onClick={onAdd}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <UserPlus className="h-5 w-5 mr-2" />
      Add User
    </button>
  );
};