import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// destination data so we can display details when a destination is selected
import { DESTINATIONS, Destination } from '../destinations/destinations-data';
import { AuthService } from '../../services/auth.service';
import { LoginModalComponent } from '../../components/login-modal/login-modal';

@Component({
  standalone: true,
  selector: 'app-booking',
  imports: [CommonModule, ReactiveFormsModule, LoginModalComponent],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent implements OnInit {
  destination: string | null = null;
  destinationData?: Destination;
  bookingForm!: FormGroup;
  submitted = false;
  successMessage = '';
  showLoginModal = false;

  // local mock storage
  bookings: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.route.queryParamMap.subscribe(map => {
      this.destination = map.get('destination');
      if (this.destination) {
        // find matching destination data by name (case‑insensitive)
        this.destinationData = DESTINATIONS.find(d => d.name.toLowerCase() === this.destination!.toLowerCase()) || undefined;
      }
    });
  }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      date: ['', Validators.required],
      people: [1, [Validators.required, Validators.min(1)]],
      destination: [{ value: this.destination || '', disabled: !!this.destination }]
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      this.showLoginModal = true;
      return;
    }

    this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    }
    const data = {
      ...this.bookingForm.getRawValue(),
      destination: this.destination || this.bookingForm.value.destination
    };
    // mimic service behaviour by storing locally
    this.bookings.push(data);
    this.successMessage = 'Your booking request has been submitted successfully!';
    this.bookingForm.reset({ people: 1 });
    this.submitted = false;
  }

  onLoginSuccess() {
    this.showLoginModal = false;
    // Auto-submit the form after successful login
    this.submitted = true;
    if (this.bookingForm.valid) {
      const data = {
        ...this.bookingForm.getRawValue(),
        destination: this.destination || this.bookingForm.value.destination
      };
      this.bookings.push(data);
      this.successMessage = 'Your booking request has been submitted successfully!';
      this.bookingForm.reset({ people: 1 });
      this.submitted = false;
    }
  }

  onLoginModalClose() {
    this.showLoginModal = false;
  }
}
