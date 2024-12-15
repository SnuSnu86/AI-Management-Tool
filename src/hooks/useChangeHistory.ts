import { useState, useEffect, useCallback } from 'react';
import { ChangeRecord } from '../types/changes';

const mockChanges: ChangeRecord[] = [
  {
    id: '1',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    category: 'settings',
    component: 'language',
    description: 'Changed system language to German'
  },
  {
    id: '2',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    category: 'data',
    component: 'vocabulary',
    description: 'Added 5 new industry terms'
  },
  {
    id: '3',
    userId: '3',
    userName: 'Mike Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    category: 'settings',
    component: 'security',
    description: 'Updated 2FA settings'
  }
];

export const useChangeHistory = (limit: number = 10) => {
  const [changes, setChanges] = useState<ChangeRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchChanges = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setChanges(mockChanges.slice(0, limit));
    setIsLoading(false);
  }, [limit]);

  useEffect(() => {
    fetchChanges();
  }, [fetchChanges]);

  return {
    changes,
    isLoading,
    refresh: fetchChanges
  };
};