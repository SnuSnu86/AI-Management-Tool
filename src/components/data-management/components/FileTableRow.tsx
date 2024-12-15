import React from 'react';
import { Download, Pencil, Trash2, FileText, Image, File } from 'lucide-react';
import { FileItem } from '../../../types/file';
import { formatFileSize } from '../utils/fileUtils';

interface FileTableRowProps {
  file: FileItem;
  onPreview: () => void;
  onDownload: () => void;
  onRename: () => void;
  onDelete: () => void;
}

export const FileTableRow: React.FC<FileTableRowProps> = ({
  file,
  onPreview,
  onDownload,
  onRename,
  onDelete,
}) => {
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="h-5 w-5" />;
    if (type.includes('pdf') || type.includes('doc')) return <FileText className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {getFileIcon(file.type)}
          <span className="ml-2 text-sm text-gray-900">{file.name}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {file.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatFileSize(file.size)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(file.lastModified).toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src={file.uploadedBy.avatar}
            alt=""
          />
          <span className="ml-2 text-sm text-gray-900">
            {file.uploadedBy.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-end space-x-2">
          <button
            onClick={onPreview}
            className="text-gray-400 hover:text-gray-500"
          >
            <FileText className="h-5 w-5" />
          </button>
          <button
            onClick={onDownload}
            className="text-gray-400 hover:text-gray-500"
          >
            <Download className="h-5 w-5" />
          </button>
          <button
            onClick={onRename}
            className="text-gray-400 hover:text-gray-500"
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            onClick={onDelete}
            className="text-red-400 hover:text-red-500"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};