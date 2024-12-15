import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { FileUploadProgress } from '../../types/file';

interface FileUploaderProps {
  onUpload: (files: FileList) => Promise<void>;
  uploadProgress: FileUploadProgress[];
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onUpload,
  uploadProgress,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    await onUpload(files);
  };

  return (
    <div className="p-6 border-b border-gray-200">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here, or{' '}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-indigo-600 hover:text-indigo-500"
          >
            browse
          </button>
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Maximum file size: 50MB
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && onUpload(e.target.files)}
        />
      </div>

      {uploadProgress.length > 0 && (
        <div className="mt-4 space-y-2">
          {uploadProgress.map((item) => (
            <div key={item.fileName} className="relative">
              <div className="text-sm text-gray-600 flex justify-between mb-1">
                <span>{item.fileName}</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${
                    item.status === 'error'
                      ? 'bg-red-500'
                      : item.status === 'completed'
                      ? 'bg-green-500'
                      : 'bg-indigo-500'
                  }`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              {item.error && (
                <p className="text-xs text-red-500 mt-1">{item.error}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};