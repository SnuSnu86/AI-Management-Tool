import React from 'react';
import { FileList } from './FileList';
import { FileUploader } from './FileUploader';
import { useFileManager } from './hooks/useFileManager';

const DataManagement = () => {
  const {
    files,
    uploadProgress,
    handleFileUpload,
    handleFileDelete,
    handleFileRename,
    handleFileDownload,
  } = useFileManager();

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Data Management</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <FileUploader 
          onUpload={handleFileUpload}
          uploadProgress={uploadProgress}
        />
        
        <FileList
          files={files}
          onDelete={handleFileDelete}
          onRename={handleFileRename}
          onDownload={handleFileDownload}
        />
      </div>
    </div>
  );
};

export default DataManagement;