import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { NotificationService, Notification } from './services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements OnInit, OnDestroy {
  latestToast: Notification | null = null;
  showToast = false;
  private notifSub!: Subscription;
  private ringSub!: Subscription;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private notificationService: NotificationService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.notifSub = this.notificationService.notifications$.subscribe(notifs => {
      if (notifs.length > 0) {
        this.latestToast = notifs[0];
        this.cdr.detectChanges();
      }
    });
    this.ringSub = this.notificationService.newNotification$.subscribe(isNew => {
      if (isNew) {
        this.showToast = true;
        this.cdr.detectChanges();
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
          this.showToast = false;
          this.cdr.detectChanges();
        }, 3500);
      }
    });
  }

  ngOnDestroy() {
    this.notifSub?.unsubscribe();
    this.ringSub?.unsubscribe();
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }

  dismissToast() {
    this.showToast = false;
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }
}
