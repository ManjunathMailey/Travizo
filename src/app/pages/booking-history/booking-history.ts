import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingService, BookingRecord } from '../../services/booking.service';
import { AuthService, User } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AnimateOnScrollDirective],
  templateUrl: './booking-history.html',
  styleUrl: './booking-history.css',
})
export class BookingHistoryComponent implements OnInit, OnDestroy {
  allBookings: BookingRecord[] = [];
  currentUser: User | null = null;
  isLoggedIn = false;

  // Filter / Search
  searchQuery = '';
  filterDestination = '';
  sortOrder: 'newest' | 'oldest' | 'highest' | 'lowest' = 'newest';

  // Modify modal state
  editingBooking: BookingRecord | null = null;
  editCheckIn = '';
  editCheckOut = '';
  editTravelers = 1;

  private sub!: Subscription;
  private authSub!: Subscription;

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private notify: NotificationService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.authSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
      this.cdr.detectChanges();
    });

    this.sub = this.bookingService.bookings$.subscribe(bookings => {
      // Show only the current user's bookings (filtered by email)
      const userEmail = this.currentUser?.email ?? '';
      this.allBookings = bookings.filter(b =>
        !userEmail || b.travelerEmail === userEmail,
      );
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.authSub?.unsubscribe();
  }

  // ── Unique destinations for filter dropdown ─────────────────────
  get uniqueDestinations(): string[] {
    return [...new Set(this.allBookings.map(b => b.destination))].sort();
  }

  // ── Filtered + sorted bookings ───────────────────────────────────
  get filteredBookings(): BookingRecord[] {
    let result = [...this.allBookings];

    // Text search
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(b =>
        b.destination.toLowerCase().includes(q) ||
        b.ref.toLowerCase().includes(q) ||
        b.packageName.toLowerCase().includes(q),
      );
    }

    // Destination filter
    if (this.filterDestination) {
      result = result.filter(b => b.destination === this.filterDestination);
    }

    // Sort
    switch (this.sortOrder) {
      case 'newest':  result.sort((a, b) => new Date(b.bookedAt).getTime() - new Date(a.bookedAt).getTime()); break;
      case 'oldest':  result.sort((a, b) => new Date(a.bookedAt).getTime() - new Date(b.bookedAt).getTime()); break;
      case 'highest': result.sort((a, b) => b.totalAmountNum - a.totalAmountNum); break;
      case 'lowest':  result.sort((a, b) => a.totalAmountNum - b.totalAmountNum); break;
    }

    return result;
  }

  // ── Summary stats (user's own trips) ───────────────────────────
  get totalTrips(): number { return this.allBookings.length; }
  get totalSpent(): number { return this.allBookings.reduce((s, b) => s + b.totalAmountNum, 0); }
  get totalTravelers(): number { return this.allBookings.reduce((s, b) => s + b.travelers, 0); }
  get uniqueDestCount(): number { return new Set(this.allBookings.map(b => b.destination)).size; }

  clearFilters(): void {
    this.searchQuery = '';
    this.filterDestination = '';
    this.sortOrder = 'newest';
  }

  cancelBooking(booking: BookingRecord): void {
    if (!confirm(`Cancel booking ${booking.ref} for ${booking.destination}? This cannot be undone.`)) return;
    this.bookingService.cancelBooking(booking.ref);
    this.notify.info(`Booking ${booking.ref} has been cancelled.`);
  }

  openModify(booking: BookingRecord): void {
    this.editingBooking = { ...booking };
    this.editCheckIn = booking.checkIn;
    this.editCheckOut = booking.checkOut;
    this.editTravelers = booking.travelers;
  }

  saveModify(): void {
    if (!this.editingBooking) return;
    this.bookingService.updateBooking(this.editingBooking.ref, {
      checkIn: this.editCheckIn,
      checkOut: this.editCheckOut,
      travelers: this.editTravelers,
    });
    this.notify.success(`Booking ${this.editingBooking.ref} updated successfully.`);
    this.editingBooking = null;
  }

  cancelModify(): void {
    this.editingBooking = null;
  }

  formatCurrency(amount: number): string {
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  }

  formatDateTime(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }
}
