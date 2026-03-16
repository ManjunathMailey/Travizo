import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  // local mock messages
  messages: any[] = [];

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.messages.push(this.contactForm.value);
    this.successMessage = 'Thank you! Your message has been sent.';
    this.contactForm.reset();
    this.submitted = false;
  }
}
