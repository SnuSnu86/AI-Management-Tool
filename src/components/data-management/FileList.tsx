import React, { useState } from 'react';
import { Download, Pencil, Trash2, FileText, Image, File } from 'lucide-react';
import { FileItem } from '../../types/file';
import { formatFileSize } from './utils/fileUtils';
import { FilePreview } from './FilePreview';
import { RenameDialog } from './RenameDialog';

interface FileListProps {
  files: FileItem[];
  onDelete: (fileId: string) => Promise<void>;
  onRename: (fileId: string, newName: string) => Promise<void>;
  onDownload: (fileId: string) => Promise<void>;
}

export const FileList: React.FC<FileListProps> = ({
  files,
  onDelete,
  onRename,
  onDownload,
}) => {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="h-5 w-5" />;
    if (type.includes('pdf') || type.includes('doc')) return <FileText className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  const handleDeleteClick = async (file: FileItem) => {
    if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
      await onDelete(file.id);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modified</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {files.map((file) => (
            <tr key={file.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getFileIcon(file.type)}
                  <span className="ml-2 text-sm text-gray-900">{file.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatFileSize(file.size)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(file.lastModified).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img className="h-8 w-8 rounded-full" src={file.uploadedBy.avatar} alt="" />
                  <span className="ml-2 text-sm text-gray-900">{file.uploadedBy.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {
                      setSelectedFile(file);
                      setShowPreview(true);
                    }}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <FileText className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDownload(file.id)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFile(file);
                      setShowRenameDialog(true);
                    }}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(file)}
                    className="text-red-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showRenameDialog && selectedFile && (
        <RenameDialog
          file={selectedFile}
          onRename={onRename}
          onClose={() => setShowRenameDialog(false)}
        />
      )}

      {showPreview && selectedFile && (
        <FilePreview
          file={selectedFile}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};