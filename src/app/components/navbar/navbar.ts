import { Component, HostListener, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService, User } from '../../services/auth.service';
import { LoginModalComponent } from '../login-modal/login-modal';
import { NotificationService } from '../../services/notification.service';
import { ToastComponent } from '../toast/toast';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, LoginModalComponent, ToastComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  showLoginModal = false;
  currentUser: User | null = null;
  private userSub!: Subscription;

  constructor(
    private authService: AuthService,
    private notify: NotificationService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.userSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 80;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  openLoginModal() {
    this.showLoginModal = true;
    this.closeMobileMenu();
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  onLoginSuccess() {
    this.showLoginModal = false;
  }

  get displayName(): string {
    if (!this.currentUser?.name) return '';
    const first = this.currentUser.name.split(' ')[0];
    return first.length > 12 ? first.slice(0, 12) + '…' : first;
  }

  logout() {
    this.authService.logout();
    this.notify.info('You have been logged out. See you soon! 👋');
    this.closeMobileMenu();
  }
}
