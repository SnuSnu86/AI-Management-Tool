import React from 'react';
import { X } from 'lucide-react';
import { FileItem } from '../../types/file';

interface FilePreviewProps {
  file: FileItem;
  onClose: () => void;
}

export const FilePreview: React.FC<FilePreviewProps> = ({ file, onClose }) => {
  const isImage = file.type.startsWith('image/');
  const isPDF = file.type === 'application/pdf';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          {isImage ? (
            <img
              src={URL.createObjectURL(new Blob())} // In a real app, use actual file data
              alt={file.name}
              className="max-w-full h-auto"
            />
          ) : isPDF ? (
            <div className="bg-gray-100 p-4 rounded text-center">
              <p>PDF preview not available in this demo</p>
            </div>
          ) : (
            <div className="bg-gray-100 p-4 rounded text-center">
              <p>Preview not available for this file type</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};