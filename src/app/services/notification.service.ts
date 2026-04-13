import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
  icon: string;
  timestamp: Date;
  read: boolean;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications: Notification[] = [];
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  readonly notifications$ = this.notificationsSubject.asObservable();

  /** Fires briefly to trigger the bell ring animation */
  private newNotifSubject = new BehaviorSubject<boolean>(false);
  readonly newNotification$ = this.newNotifSubject.asObservable();

  private nextId = 0;

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  push(message: string, type: NotificationType = 'info'): void {
    const icon = this.getIcon(type);
    const notif: Notification = {
      id: this.nextId++,
      message,
      type,
      icon,
      timestamp: new Date(),
      read: false,
    };
    this.notifications = [notif, ...this.notifications];
    this.notificationsSubject.next(this.notifications);

    // Trigger bell ring
    this.newNotifSubject.next(true);
    setTimeout(() => this.newNotifSubject.next(false), 1500);
  }

  markAllRead(): void {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
    this.notificationsSubject.next(this.notifications);
  }

  markRead(id: number): void {
    this.notifications = this.notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    );
    this.notificationsSubject.next(this.notifications);
  }

  clearAll(): void {
    this.notifications = [];
    this.notificationsSubject.next(this.notifications);
  }

  success(message: string): void { this.push(message, 'success'); }
  error(message: string): void   { this.push(message, 'error'); }
  info(message: string): void    { this.push(message, 'info'); }
  warning(message: string): void { this.push(message, 'warning'); }

  private getIcon(type: NotificationType): string {
    switch (type) {
      case 'success': return '✓';
      case 'error':   return '✕';
      case 'warning': return '⚠';
      case 'info':
      default:        return 'ℹ';
    }
  }
}
