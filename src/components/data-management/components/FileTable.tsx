import React from 'react';
import { FileItem } from '../../../types/file';
import { FileTableHeader } from './FileTableHeader';
import { FileTableRow } from './FileTableRow';

interface FileTableProps {
  files: FileItem[];
  onPreview: (file: FileItem) => void;
  onDownload: (fileId: string) => Promise<void>;
  onRename: (file: FileItem) => void;
  onDelete: (file: FileItem) => void;
}

export const FileTable: React.FC<FileTableProps> = ({
  files,
  onPreview,
  onDownload,
  onRename,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <FileTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {files.map((file) => (
            <FileTableRow
              key={file.id}
              file={file}
              onPreview={() => onPreview(file)}
              onDownload={() => onDownload(file.id)}
              onRename={() => onRename(file)}
              onDelete={() => onDelete(file)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};