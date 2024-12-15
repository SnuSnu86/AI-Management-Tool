import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { User } from '../../types';

export class FirebaseUserService {
  private usersCollection = collection(db, 'users');

  async getUsers(): Promise<User[]> {
    const snapshot = await getDocs(this.usersCollection);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as User));
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const q = query(this.usersCollection, where('email', '==', email));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data()
    } as User;
  }

  async createUser(userData: Omit<User, 'id'>): Promise<string> {
    const docRef = await addDoc(this.usersCollection, {
      ...userData,
      createdAt: serverTimestamp(),
      lastActive: serverTimestamp()
    });
    return docRef.id;
  }

  async updateUser(userId: string, userData: Partial<User>): Promise<void> {
    const userRef = doc(this.usersCollection, userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: serverTimestamp()
    });
  }

  async deleteUser(userId: string): Promise<void> {
    const userRef = doc(this.usersCollection, userId);
    await deleteDoc(userRef);
  }
}

export const firebaseUsers = new FirebaseUserService();