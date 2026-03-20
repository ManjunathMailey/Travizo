import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

  isLogin = true;

  loginEmail = '';
  loginPassword = '';
  loginError = '';

  signupName = '';
  signupEmail = '';
  signupPhone = '';
  signupPassword = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.loginError = '';
    if (!this.loginEmail || !this.loginPassword) {
      this.loginError = 'Please enter your email and password.';
      return;
    }
    if (this.authService.login(this.loginEmail, this.loginPassword)) {
      this.loginSuccess.emit();
    } else {
      this.loginError = 'Invalid email or password.';
    }
  }

  onSignup() {
    if (!this.signupName || !this.signupEmail || !this.signupPhone || !this.signupPassword) {
      return;
    }
    this.authService.signup(this.signupEmail, this.signupPassword, this.signupName, this.signupPhone);
    this.loginSuccess.emit();
  }

  onClose() {
    this.close.emit();
  }
}
