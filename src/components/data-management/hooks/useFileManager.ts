import { useState, useCallback } from 'react';
import { FileItem, FileUploadProgress } from '../../../types/file';
import { validateFile } from '../utils/fileUtils';

export const useFileManager = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [uploadProgress, setUploadProgress] = useState<FileUploadProgress[]>([]);

  const handleFileUpload = useCallback(async (fileList: FileList) => {
    const newProgress: FileUploadProgress[] = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const validationError = validateFile(file);
      
      if (validationError) {
        newProgress.push({
          fileName: file.name,
          progress: 0,
          status: 'error',
          error: validationError
        });
        continue;
      }

      newProgress.push({
        fileName: file.name,
        progress: 0,
        status: 'uploading'
      });
    }

    setUploadProgress(newProgress);

    // Simulate file upload progress
    for (let i = 0; i < newProgress.length; i++) {
      if (newProgress[i].status === 'error') continue;

      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setUploadProgress(prev => 
          prev.map((item, index) => 
            index === i ? { ...item, progress } : item
          )
        );
      }

      setUploadProgress(prev =>
        prev.map((item, index) =>
          index === i ? { ...item, status: 'completed' } : item
        )
      );

      // Add the file to the list
      const file = fileList[i];
      const newFile: FileItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type || 'application/octet-stream',
        size: file.size,
        lastModified: new Date(file.lastModified),
        uploadedBy: {
          id: '1',
          name: 'John Doe',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
        }
      };

      setFiles(prev => [...prev, newFile]);
    }

    // Clear progress after a delay
    setTimeout(() => {
      setUploadProgress([]);
    }, 2000);
  }, []);

  const handleFileDelete = useCallback(async (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  }, []);

  const handleFileRename = useCallback(async (fileId: string, newName: string) => {
    setFiles(prev =>
      prev.map(file =>
        file.id === fileId ? { ...file, name: newName } : file
      )
    );
  }, []);

  const handleFileDownload = useCallback(async (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (!file) return;
    
    // Simulate file download
    console.log(`Downloading file: ${file.name}`);
  }, [files]);

  return {
    files,
    uploadProgress,
    handleFileUpload,
    handleFileDelete,
    handleFileRename,
    handleFileDownload,
  };
};