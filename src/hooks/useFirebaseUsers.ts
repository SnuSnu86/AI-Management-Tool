import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { User } from '../types';

export const useFirebaseUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('lastLogin', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const userData = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          role: doc.data().role,
          avatar: doc.data().avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.data().name)}`,
          lastActive: doc.data().lastLogin?.toDate() || new Date(),
        }));
        setUsers(userData);
        setIsLoading(false);
      },
      (err) => {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { users, isLoading, error };
};