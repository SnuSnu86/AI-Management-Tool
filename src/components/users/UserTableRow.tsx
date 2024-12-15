import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { User } from '../../types/index';

interface UserTableRowProps {
  user: User;
  isAdmin: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export const UserTableRow: React.FC<UserTableRowProps> = ({
  user,
  isAdmin,
  onEdit,
  onDelete,
}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      onDelete();
    }
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src={user.avatar}
            alt=""
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          user.role === 'Admin'
            ? 'bg-red-100 text-red-800'
            : user.role === 'Developer'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-green-100 text-green-800'
        }`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(user.lastActive).toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {isAdmin && (
          <div className="flex justify-end space-x-2">
            <button
              onClick={onEdit}
              className="text-indigo-600 hover:text-indigo-900"
            >
              <Pencil className="h-5 w-5" />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-900"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};