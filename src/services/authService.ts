import { LoginCredentials, User, UserRegistration } from '../types/auth';
import { hashPassword, verifyPassword } from '../utils/crypto';
import { generateToken, verifyToken } from '../utils/jwt';

class AuthService {
  private readonly storageKey = 'auth_token';
  private readonly lockoutKey = 'login_attempts';
  private readonly maxAttempts = 5;
  private readonly lockoutDuration = 15 * 60 * 1000; // 15 minutes

  async login(credentials: LoginCredentials): Promise<User> {
    await this.checkLockout();

    try {
      // In a real app, this would be an API call
      const user = await this.mockLoginRequest(credentials);
      
      if (credentials.rememberMe) {
        localStorage.setItem(this.storageKey, generateToken(user));
      } else {
        sessionStorage.setItem(this.storageKey, generateToken(user));
      }

      this.resetLockout();
      return user;
    } catch (error) {
      await this.incrementLoginAttempts();
      throw error;
    }
  }

  async register(data: UserRegistration): Promise<void> {
    const hashedPassword = await hashPassword(data.password);
    // In a real app, this would be an API call
    console.log('Registration data:', { ...data, password: hashedPassword });
  }

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem(this.storageKey) || sessionStorage.getItem(this.storageKey);
    if (!token) return null;

    try {
      const decoded = await verifyToken(token);
      return decoded as User;
    } catch {
      this.logout();
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.storageKey);
  }

  async resetPassword(email: string): Promise<void> {
    // In a real app, this would trigger a password reset email
    console.log('Password reset requested for:', email);
  }

  private async mockLoginRequest(credentials: LoginCredentials): Promise<User> {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock user for demonstration
    const mockUser: User = {
      id: '1',
      username: 'demo_user',
      email: 'demo@example.com',
      name: 'Demo User',
      dateOfBirth: new Date('1990-01-01'),
      role: 'user',
      lastLogin: new Date()
    };

    return mockUser;
  }

  private async checkLockout(): Promise<void> {
    const lockoutData = localStorage.getItem(this.lockoutKey);
    if (!lockoutData) return;

    const { attempts, timestamp } = JSON.parse(lockoutData);
    const timePassed = Date.now() - timestamp;

    if (attempts >= this.maxAttempts && timePassed < this.lockoutDuration) {
      throw new Error(`Account locked. Try again in ${Math.ceil((this.lockoutDuration - timePassed) / 60000)} minutes`);
    }

    if (timePassed >= this.lockoutDuration) {
      this.resetLockout();
    }
  }

  private async incrementLoginAttempts(): Promise<void> {
    const lockoutData = localStorage.getItem(this.lockoutKey);
    const currentData = lockoutData ? JSON.parse(lockoutData) : { attempts: 0, timestamp: Date.now() };

    currentData.attempts += 1;
    currentData.timestamp = Date.now();

    localStorage.setItem(this.lockoutKey, JSON.stringify(currentData));
  }

  private resetLockout(): void {
    localStorage.removeItem(this.lockoutKey);
  }
}

export const authService = new AuthService();