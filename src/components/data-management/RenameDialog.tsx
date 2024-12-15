import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FileItem } from '../../types/file';
import { getFileExtension } from './utils/fileUtils';

interface RenameDialogProps {
  file: FileItem;
  onRename: (fileId: string, newName: string) => Promise<void>;
  onClose: () => void;
}

export const RenameDialog: React.FC<RenameDialogProps> = ({
  file,
  onRename,
  onClose,
}) => {
  const extension = getFileExtension(file.name);
  const nameWithoutExt = file.name.slice(0, -(extension.length + 1));
  const [newName, setNewName] = useState(nameWithoutExt);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newName.trim()) {
      setError('File name cannot be empty');
      return;
    }

    try {
      await onRename(file.id, `${newName.trim()}.${extension}`);
      onClose();
    } catch (err) {
      setError('Failed to rename file');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Rename File</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="fileName" className="block text-sm font-medium text-gray-700">
              File Name
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                id="fileName"
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                  setError('');
                }}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <span className="inline-flex items-center px-3 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
                .{extension}
              </span>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Rename
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};