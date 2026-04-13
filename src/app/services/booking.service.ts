import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BookingRecord {
  ref: string;
  destination: string;
  packageName: string;
  packageEmoji: string;
  travelers: number;
  checkIn: string;
  checkOut: string;
  totalAmount: string;
  totalAmountNum: number;
  travelerName: string;
  travelerEmail: string;
  travelerPhone: string;
  bookedAt: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly STORAGE_KEY = 'pmj_bookings';
  private bookingsSubject = new BehaviorSubject<BookingRecord[]>(this.loadFromStorage());
  readonly bookings$ = this.bookingsSubject.asObservable();

  saveBooking(booking: BookingRecord): void {
    const bookings = [...this.bookingsSubject.value, booking];
    this.bookingsSubject.next(bookings);
    this.saveToStorage(bookings);
  }

  getAllBookings(): BookingRecord[] {
    return this.bookingsSubject.value;
  }

  cancelBooking(ref: string): void {
    const bookings = this.bookingsSubject.value.filter(b => b.ref !== ref);
    this.bookingsSubject.next(bookings);
    this.saveToStorage(bookings);
  }

  updateBooking(ref: string, updates: Partial<BookingRecord>): void {
    const bookings = this.bookingsSubject.value.map(b =>
      b.ref === ref ? { ...b, ...updates } : b,
    );
    this.bookingsSubject.next(bookings);
    this.saveToStorage(bookings);
  }

  get totalBookings(): number {
    return this.bookingsSubject.value.length;
  }

  get totalRevenue(): number {
    return this.bookingsSubject.value.reduce((sum, b) => sum + b.totalAmountNum, 0);
  }

  get packageBreakdown(): { name: string; count: number }[] {
    const map = new Map<string, number>();
    for (const b of this.bookingsSubject.value) {
      map.set(b.packageName, (map.get(b.packageName) || 0) + 1);
    }
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  get destinationBreakdown(): { name: string; count: number; revenue: number }[] {
    const map = new Map<string, { count: number; revenue: number }>();
    for (const b of this.bookingsSubject.value) {
      const existing = map.get(b.destination) || { count: 0, revenue: 0 };
      map.set(b.destination, {
        count: existing.count + 1,
        revenue: existing.revenue + b.totalAmountNum,
      });
    }
    return Array.from(map.entries())
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.count - a.count);
  }

  get totalTravelers(): number {
    return this.bookingsSubject.value.reduce((sum, b) => sum + b.travelers, 0);
  }

  private loadFromStorage(): BookingRecord[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(bookings: BookingRecord[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
    } catch {
      // localStorage unavailable
    }
  }
}
