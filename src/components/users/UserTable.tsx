import React from 'react';
import { User } from '../../types/index';
import { UserTableHeader } from './UserTableHeader';
import { UserTableRow } from './UserTableRow';

interface UserTableProps {
  users: User[];
  isAdmin: boolean;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  isAdmin,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <UserTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <UserTableRow
              key={user.id}
              user={user}
              isAdmin={isAdmin}
              onEdit={() => onEdit(user)}
              onDelete={() => onDelete(user.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};