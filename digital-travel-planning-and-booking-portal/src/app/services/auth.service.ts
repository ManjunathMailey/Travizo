import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.loadUserFromStorage());
  readonly currentUser$ = this.currentUserSubject.asObservable();

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      const user: User = {
        id: 'user-' + Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0],
      };
      this.currentUserSubject.next(user);
      this.saveUserToStorage(user);
      return true;
    }
    return false;
  }

  signup(email: string, password: string, name: string, phone: string): void {
    const user: User = {
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      email,
      name,
      phone,
    };
    this.currentUserSubject.next(user);
    this.saveUserToStorage(user);
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('pmj_user');
  }

  private saveUserToStorage(user: User): void {
    try {
      localStorage.setItem('pmj_user', JSON.stringify(user));
    } catch {
      // localStorage unavailable (SSR / private browsing)
    }
  }

  private loadUserFromStorage(): User | null {
    try {
      const stored = localStorage.getItem('pmj_user');
      return stored ? (JSON.parse(stored) as User) : null;
    } catch {
      return null;
    }
  }
}
