export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: Date;
  uploadedBy: {
    id: string;
    name: string;
    avatar: string;
  };
}

export interface FileUploadProgress {
  fileName: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  error?: string;
}