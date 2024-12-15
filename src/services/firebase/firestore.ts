import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export class FirestoreService {
  constructor(private collectionName: string) {}

  async getAll() {
    const querySnapshot = await getDocs(collection(db, this.collectionName));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  async getById(id: string) {
    const docRef = doc(db, this.collectionName, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    }
    return null;
  }

  async create(data: DocumentData) {
    const docRef = doc(collection(db, this.collectionName));
    await setDoc(docRef, {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  }

  async update(id: string, data: Partial<DocumentData>) {
    const docRef = doc(db, this.collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now()
    });
  }

  async delete(id: string) {
    const docRef = doc(db, this.collectionName, id);
    await deleteDoc(docRef);
  }

  async query(conditions: Array<{
    field: string;
    operator: '==' | '<' | '<=' | '>' | '>=' | 'array-contains';
    value: any;
  }>, orderByField?: string, limitTo?: number) {
    let q = collection(db, this.collectionName);

    // Add where clauses
    conditions.forEach(({ field, operator, value }) => {
      q = query(q, where(field, operator, value));
    });

    // Add orderBy if specified
    if (orderByField) {
      q = query(q, orderBy(orderByField));
    }

    // Add limit if specified
    if (limitTo) {
      q = query(q, limit(limitTo));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
}