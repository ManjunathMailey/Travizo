import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

type ModalMode = 'login' | 'signup' | 'forgot';

@Component({
  standalone: true,
  selector: 'app-login-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css',
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<void>();

  mode: ModalMode = 'login';

  // Login
  loginEmail = '';
  loginPassword = '';
  loginError = '';
  showLoginPwd = false;

  // Signup
  signupName = '';
  signupEmail = '';
  signupPhone = '';
  signupPassword = '';
  signupConfirmPassword = '';
  signupErrors: Record<string, string> = {};
  showSignupPwd = false;
  showConfirmPwd = false;

  // Forgot Password
  forgotEmail = '';
  forgotError = '';
  forgotSent = false;

  constructor(
    private authService: AuthService,
    private notify: NotificationService,
  ) {}

  get isLogin() { return this.mode === 'login'; }
  get isSignup() { return this.mode === 'signup'; }
  get isForgot() { return this.mode === 'forgot'; }

  // ── Password Strength ──────────────────────────────────────────
  getPasswordStrength(pwd: string): number {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score; // 0–4
  }

  get signupStrength(): number {
    return this.getPasswordStrength(this.signupPassword);
  }

  get strengthLabel(): string {
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    return labels[this.signupStrength] ?? '';
  }

  get strengthClass(): string {
    const classes = ['', 'strength-weak', 'strength-fair', 'strength-good', 'strength-strong'];
    return classes[this.signupStrength] ?? '';
  }

  // ── Password Validation ─────────────────────────────────────────
  private validatePassword(pwd: string): string {
    if (!pwd) return 'Password is required.';
    if (pwd.length < 8) return 'At least 8 characters required.';
    if (!/[A-Z]/.test(pwd)) return 'Include at least one uppercase letter (A–Z).';
    if (!/[a-z]/.test(pwd)) return 'Include at least one lowercase letter (a–z).';
    if (!/[0-9]/.test(pwd)) return 'Include at least one number (0–9).';
    if (!/[^A-Za-z0-9]/.test(pwd)) return 'Include at least one special character (!@#$…).';
    return '';
  }

  // ── Login ───────────────────────────────────────────────────────
  onLogin() {
    this.loginError = '';
    if (!this.loginEmail || !this.loginPassword) {
      this.loginError = 'Please enter your email and password.';
      return;
    }
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(this.loginEmail)) {
      this.loginError = 'Please enter a valid email address.';
      return;
    }
    if (this.authService.login(this.loginEmail, this.loginPassword)) {
      this.notify.success('Login successful! Welcome back 🎉');
      this.loginSuccess.emit();
    } else {
      this.loginError = 'Invalid email or password.';
      this.notify.error('Login failed. Please check your credentials.');
    }
  }

  // ── Signup ──────────────────────────────────────────────────────
  onSignup() {
    this.signupErrors = {};

    if (!this.signupName || this.signupName.trim().length < 2) {
      this.signupErrors['name'] = 'Please enter your full name (min. 2 characters).';
    }
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.signupEmail || !emailReg.test(this.signupEmail)) {
      this.signupErrors['email'] = 'Please enter a valid email address.';
    }
    const phoneReg = /^[6-9][0-9]{9}$/;
    if (!this.signupPhone || !phoneReg.test(this.signupPhone)) {
      this.signupErrors['phone'] = 'Enter a valid 10-digit Indian mobile number.';
    }
    const pwdError = this.validatePassword(this.signupPassword);
    if (pwdError) {
      this.signupErrors['password'] = pwdError;
    }
    if (this.signupPassword !== this.signupConfirmPassword) {
      this.signupErrors['confirm'] = 'Passwords do not match.';
    }

    if (Object.keys(this.signupErrors).length > 0) return;

    this.authService.signup(this.signupEmail, this.signupPassword, this.signupName.trim(), this.signupPhone);
    this.notify.success('Account created successfully! Welcome aboard 🚀');
    this.loginSuccess.emit();
  }

  // ── Forgot Password ─────────────────────────────────────────────
  onForgotPassword() {
    this.forgotError = '';
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.forgotEmail || !emailReg.test(this.forgotEmail)) {
      this.forgotError = 'Please enter a valid email address.';
      return;
    }
    // Simulate sending reset email (frontend-only demo)
    this.forgotSent = true;
    this.notify.success('Password reset link sent to your email! 📧');
  }

  switchMode(m: ModalMode) {
    this.mode = m;
    this.loginError = '';
    this.signupErrors = {};
    this.forgotError = '';
    this.forgotSent = false;
  }

  onClose() {
    this.close.emit();
  }
}
