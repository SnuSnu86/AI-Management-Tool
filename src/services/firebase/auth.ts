import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { User, LoginCredentials, UserRegistration } from '../../types/auth';

export class FirebaseAuthService {
  async register(data: UserRegistration): Promise<void> {
    try {
      // Create auth user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      
      // Update profile with name
      await updateProfile(user, {
        displayName: data.name
      });

      // Send verification email
      await sendEmailVerification(user);

      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: data.email,
        name: data.name,
        role: 'user',
        createdAt: new Date(),
        lastLogin: new Date(),
        emailVerified: false
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  async login({ email, password }: LoginCredentials): Promise<User> {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      // Update last login in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        lastLogin: new Date()
      }, { merge: true });

      return this.transformFirebaseUser(user);
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  async resendVerificationEmail(): Promise<void> {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('No user is currently signed in');
    }
    
    try {
      await sendEmailVerification(user);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }

  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  private transformFirebaseUser(firebaseUser: FirebaseUser): User {
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      name: firebaseUser.displayName || '',
      role: 'user',
      lastLogin: new Date(),
      emailVerified: firebaseUser.emailVerified
    };
  }

  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Email is already registered';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/operation-not-allowed':
        return 'Operation not allowed';
      case 'auth/weak-password':
        return 'Password is too weak';
      case 'auth/user-disabled':
        return 'User account has been disabled';
      case 'auth/user-not-found':
        return 'User not found';
      case 'auth/wrong-password':
        return 'Invalid password';
      default:
        return 'An error occurred during authentication';
    }
  }
}

export const firebaseAuth = new FirebaseAuthService();