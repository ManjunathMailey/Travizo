import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BookingComponent } from './booking';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    component.bookingForm.controls['name'].setValue('');
    component.bookingForm.controls['email'].setValue('');
    component.bookingForm.controls['date'].setValue('');
    component.bookingForm.controls['people'].setValue(null);
    expect(component.bookingForm.valid).toBeFalse();
  });

  it('submitting valid form should add to bookings and reset', () => {
    component.bookingForm.controls['name'].setValue('Alice');
    component.bookingForm.controls['email'].setValue('alice@example.com');
    component.bookingForm.controls['date'].setValue('2026-04-01');
    component.bookingForm.controls['people'].setValue(2);
    const initialCount = component.bookings.length;
    component.onSubmit();
    expect(component.bookings.length).toBe(initialCount + 1);
    expect(component.successMessage.length).toBeGreaterThan(0);
    expect(component.bookingForm.pristine).toBeTrue();
  });
});
