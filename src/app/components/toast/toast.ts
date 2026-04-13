import { Component, OnInit, OnDestroy, HostListener, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NotificationService, Notification } from '../../services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class ToastComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  isOpen = false;
  isRinging = false;
  unreadCount = 0;

  private sub!: Subscription;
  private ringSub!: Subscription;

  constructor(
    private notificationService: NotificationService,
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.sub = this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
      this.unreadCount = this.notificationService.unreadCount;
      this.cdr.detectChanges();
    });

    this.ringSub = this.notificationService.newNotification$.subscribe(isNew => {
      this.isRinging = isNew;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.ringSub?.unsubscribe();
  }

  togglePanel(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.notificationService.markAllRead();
    }
  }

  closePanel(): void {
    this.isOpen = false;
  }

  clearAll(): void {
    this.notificationService.clearAll();
    this.isOpen = false;
  }

  timeAgo(date: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    if (diff < 10) return 'Just now';
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.isOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.closePanel();
    }
  }
}
