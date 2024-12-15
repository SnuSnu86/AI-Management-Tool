import { FirebaseAuthService } from './firebase/auth';
import { FirestoreService } from './firebase/firestore';

// Auth service
export const authService = new FirebaseAuthService();

// Collection-specific services
export const usersService = new FirestoreService('users');
export const systemsService = new FirestoreService('systems');
export const metricsService = new FirestoreService('metrics');
export const vocabularyService = new FirestoreService('vocabulary');
export const filterWordsService = new FirestoreService('filterWords');
export const filesService = new FirestoreService('files');