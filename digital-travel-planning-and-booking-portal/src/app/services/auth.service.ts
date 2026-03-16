import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  email: string;
  name: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = new BehaviorSubject<User | null>(this.loadUserFromStorage());
  public currentUser$ = this.currentUser.asObservable();

  constructor() {}

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.currentUser.value;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUser.value;
  }

  // Mock signup
  signup(email: string, password: string, name: string, phone: string): void {
    const user: User = { email, name, phone };
    this.currentUser.next(user);
    this.saveUserToStorage(user);
  }

  // Mock login
  login(email: string, password: string): boolean {
    // In a real app, this would authenticate against a backend
    // Mock validation: just check email and password are not empty
    if (email && password) {
      const user: User = { email, name: email.split('@')[0], phone: '' };
      this.currentUser.next(user);
      this.saveUserToStorage(user);
      return true;
    }
    return false;
  }

  // Logout
  logout(): void {
    this.currentUser.next(null);
    localStorage.removeItem('planmyjourney_user');
  }

  // Save user to localStorage
  private saveUserToStorage(user: User): void {
    localStorage.setItem('planmyjourney_user', JSON.stringify(user));
  }

  // Load user from localStorage
  private loadUserFromStorage(): User | null {
    const stored = localStorage.getItem('planmyjourney_user');
    return stored ? JSON.parse(stored) : null;
  }
}
