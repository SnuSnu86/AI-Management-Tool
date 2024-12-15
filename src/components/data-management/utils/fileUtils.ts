export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const validateFile = (file: File): string | null => {
  // Maximum file size (50MB)
  const maxSize = 50 * 1024 * 1024;
  
  if (file.size > maxSize) {
    return 'File size exceeds 50MB limit';
  }

  // Add more validation as needed
  return null;
};

export const getFileExtension = (filename: string): string => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
};