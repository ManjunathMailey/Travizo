import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['message'].setValue('');
    expect(component.contactForm.valid).toBeFalse();
  });

  it('submitting valid form stores message and resets', () => {
    component.contactForm.controls['name'].setValue('Bob');
    component.contactForm.controls['email'].setValue('bob@example.com');
    component.contactForm.controls['message'].setValue('Hello');
    const initial = component.messages.length;
    component.onSubmit();
    expect(component.messages.length).toBe(initial + 1);
    expect(component.successMessage.length).toBeGreaterThan(0);
  });
});
