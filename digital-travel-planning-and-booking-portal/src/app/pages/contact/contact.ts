import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AnimateOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted = false;
  mapUrl: SafeResourceUrl;

  faqs: Faq[] = [
    {
      question: 'How far in advance should I book a trip?',
      answer: 'We recommend booking at least 4–6 weeks in advance, especially for peak season (October–March). This gives us time to arrange the best accommodations and activity slots for you. However, we can accommodate last-minute bookings when availability allows.',
      open: false,
    },
    {
      question: 'Are meals included in the trip price?',
      answer: 'Our Standard and Premium packages include daily breakfast. Lunch and dinner are included in our Luxury packages or can be added as an add-on. All meal preferences (vegetarian, vegan, gluten-free, halal) are accommodated at no extra charge.',
      open: false,
    },
    {
      question: 'What is the cancellation and refund policy?',
      answer: 'Cancellations made 30+ days before departure receive a full refund. Cancellations 15–29 days prior receive a 50% refund. Cancellations within 14 days are non-refundable, but we offer free date changes subject to availability.',
      open: false,
    },
    {
      question: 'Can I customise my itinerary?',
      answer: 'Absolutely! We specialise in personalised travel experiences. Tell us your interests, pace preferences, dietary needs, and any special occasions — and our travel experts will craft a bespoke itinerary just for you at no extra charge.',
      open: false,
    },
    {
      question: 'What should I pack for a Western Ghats trip?',
      answer: 'For hill stations: light woolens, a waterproof jacket, comfortable trekking shoes, and insect repellent. For beaches: sunscreen, light cottons, and sandals. Always carry a reusable water bottle, a basic first-aid kit, and any personal medications.',
      open: false,
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! Groups of 6 or more receive a 10% discount. Groups of 12 or more receive a 18% discount. Corporate team outings and school/college groups can contact us for bespoke packages and special rates.',
      open: false,
    },
  ];

  subjects = ['General Enquiry', 'Trip Inquiry', 'Feedback', 'Partnership', 'Group Booking', 'Other'];

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });

    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Bengaluru,Karnataka,India&z=12&output=embed'
    );
  }

  isFieldInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.submitted = true;
    }
  }

  toggleFaq(faq: Faq) {
    faq.open = !faq.open;
  }

  resetForm() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
