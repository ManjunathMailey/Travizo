import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { DESTINATIONS, Destination } from '../destinations/destinations-data';
import { AuthService } from '../../services/auth.service';
import { LoginModalComponent } from '../../components/login-modal/login-modal';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

interface TripPackage {
  value: string;
  label: string;
  basePrice: number;
  desc: string;
  inclusions: string[];
  emoji: string;
}

const DESTINATION_PACKAGES: Record<string, TripPackage[]> = {
  'Hill Station': [
    {
      value: 'nature_trail',
      label: 'Nature Trail',
      basePrice: 9500,
      emoji: '🌿',
      desc: 'Guided forest walks, scenic valley viewpoints, cosy local homestays',
      inclusions: [
        '3★ mountain homestay',
        'Morning forest trek with guide',
        'Valley viewpoint sunset tour',
        'Local breakfast daily',
        'Spice & herb garden visit',
      ],
    },
    {
      value: 'plantation_retreat',
      label: 'Plantation Retreat',
      basePrice: 18500,
      emoji: '🍵',
      desc: 'Tea / coffee estate tours, mist walks, and premium hillside resort',
      inclusions: [
        '4★ plantation resort',
        'Estate tour with expert guide',
        'Tea / coffee tasting session',
        'All meals included',
        'Sunset valley walk',
        'Waterfall excursion',
      ],
    },
    {
      value: 'summit_adventure',
      label: 'Summit Adventure',
      basePrice: 32000,
      emoji: '⛰️',
      desc: 'Expert-guided peak treks, wildlife spotting, luxury mountain camp',
      inclusions: [
        'Luxury mountain resort',
        'Expert trek guide (2 days)',
        'Sunrise summit expedition',
        'Gourmet meals throughout',
        'Wildlife jeep safari',
        'Photography guide session',
      ],
    },
  ],
  'Backwater': [
    {
      value: 'houseboat_classic',
      label: 'Houseboat Classic',
      basePrice: 12000,
      emoji: '🚣',
      desc: 'Overnight houseboat cruise on tranquil Kerala backwaters',
      inclusions: [
        'Standard houseboat (AC cabin)',
        'All meals on board',
        'Village backwater cruise',
        'Traditional Kerala sadya lunch',
        'Sunset cruise on Vembanad',
      ],
    },
    {
      value: 'heritage_cruise',
      label: 'Heritage Cruise',
      basePrice: 24000,
      emoji: '⛵',
      desc: 'Premium houseboat with butler service and Ayurvedic sunset spa',
      inclusions: [
        'Premium luxury houseboat',
        'Dedicated butler service',
        'Ayurvedic sunset spa session',
        'Gourmet Kerala seafood meals',
        'Village cultural dance show',
        'Fishing trip on country boat',
      ],
    },
    {
      value: 'village_immersion',
      label: 'Village Immersion',
      basePrice: 38000,
      emoji: '🏡',
      desc: 'Live like a local — coir weaving, toddy farm, cooking class',
      inclusions: [
        'Boutique lake resort',
        'Coir weaving workshop',
        'Coconut toddy farm experience',
        'Private Kerala cooking class',
        'Traditional Kalam art session',
        'Dawn bird sanctuary boat trip',
      ],
    },
  ],
  'Beach': [
    {
      value: 'beach_escape',
      label: 'Beach Escape',
      basePrice: 9000,
      emoji: '🏖️',
      desc: 'Relax on iconic shores, cliff walks, seaside yoga & local cafes',
      inclusions: [
        '3★ beachside guesthouse',
        'Cliff yoga morning session',
        'Local seafood dinner',
        'Sunset meditation on the cliff',
        'Local temple guided visit',
      ],
    },
    {
      value: 'adventure_coast',
      label: 'Adventure Coast',
      basePrice: 19500,
      emoji: '🤿',
      desc: 'Paragliding, water sports, fort explorations & cliff camping',
      inclusions: [
        '4★ coastal resort',
        'Paragliding tandem flight',
        'Snorkelling / scuba session',
        'Jet ski & kayaking',
        'Bonfire beach dinner',
        'Heritage fort walking tour',
      ],
    },
    {
      value: 'luxury_shores',
      label: 'Luxury Shores',
      basePrice: 42000,
      emoji: '🌊',
      desc: 'Private villa, yacht charter, dolphin cruises & spa dining',
      inclusions: [
        'Luxury beachfront villa',
        'Private yacht charter (half day)',
        'Daily Ayurvedic spa',
        'Candlelit beach dinner',
        'Dolphin sunrise cruise',
        'Private photography session',
      ],
    },
  ],
  'Heritage': [
    {
      value: 'heritage_walk',
      label: 'Heritage Walk',
      basePrice: 8000,
      emoji: '🏛️',
      desc: 'Guided monument tours, temple visits & local history insights',
      inclusions: [
        '3★ heritage property',
        'Expert archaeologist guide',
        'All monument entry tickets',
        'Traditional meals (local thali)',
        'Cultural documentary evening',
        'Craft market visit',
      ],
    },
    {
      value: 'cultural_deep_dive',
      label: 'Cultural Deep Dive',
      basePrice: 17000,
      emoji: '🎭',
      desc: 'Temple rituals, classical arts, stone-carving workshop',
      inclusions: [
        '4★ boutique heritage hotel',
        'Temple ritual participation',
        'Classical dance performance',
        'Stone-carving / bronze art workshop',
        'Museum behind-the-scenes tour',
        'Chef-led local cooking class',
      ],
    },
    {
      value: 'scholars_tour',
      label: "Scholar's Tour",
      basePrice: 30000,
      emoji: '📜',
      desc: 'Private archaeologist, after-hours site access, drone photography',
      inclusions: [
        'Luxury heritage resort',
        'Private archaeologist-guide',
        'After-hours exclusive site access',
        'Professional drone photography session',
        'Museum curator private meeting',
        'Gourmet dinner at heritage venue',
        'Hand-crafted collector memento',
      ],
    },
  ],
  'City': [
    {
      value: 'city_explorer',
      label: 'City Explorer',
      basePrice: 7500,
      emoji: '🏙️',
      desc: 'Must-see landmarks, street food trails & local markets',
      inclusions: [
        '3★ central hotel',
        'Guided heritage walk',
        'Street food tour (4 stops)',
        'Museum & fort entry tickets',
        'Metro / local transport pass',
      ],
    },
    {
      value: 'culture_cuisine',
      label: 'Culture & Cuisine',
      basePrice: 16000,
      emoji: '🍛',
      desc: 'Temple trails, Carnatic music evening, Chettinad cooking class',
      inclusions: [
        '4★ boutique hotel',
        'Expert culture guide (2 days)',
        'Carnatic music live evening',
        'Chettinad cooking masterclass',
        'Full temple circuit tour',
        'Kapaleeshwarar sunrise visit',
      ],
    },
    {
      value: 'luxury_metro',
      label: 'Luxury Metro',
      basePrice: 28000,
      emoji: '✨',
      desc: 'Five-star hotel, private chauffeur, exclusive Bharatanatyam show',
      inclusions: [
        '5★ hotel accommodation',
        'Private chauffeur throughout',
        'Rooftop fine-dining dinner',
        'Exclusive Bharatanatyam performance',
        'Marina Beach sunrise boat ride',
        'Art gallery & antiques private tour',
      ],
    },
  ],
  'Trekking': [
    {
      value: 'base_camp',
      label: 'Base Camp',
      basePrice: 6500,
      emoji: '🥾',
      desc: 'Guided day trek with packed lunch, trail briefing & transport',
      inclusions: [
        'Professional trek guide',
        'Trail-head transport',
        'Packed lunch & water',
        'First-aid kit support',
        'Trek briefing & maps',
      ],
    },
    {
      value: 'summit_trek',
      label: 'Summit Trek',
      basePrice: 14000,
      emoji: '⛺',
      desc: 'Overnight camping, summit push, campfire dinner & sunrise views',
      inclusions: [
        'Camping equipment (tent, sleeping bag)',
        'Expert trek guide (certified)',
        'All meals during trek',
        'Campfire dinner with stories',
        'Sunrise summit experience',
        'Photography tips from guide',
      ],
    },
    {
      value: 'expedition',
      label: 'Expedition',
      basePrice: 28000,
      emoji: '🏔️',
      desc: 'Multi-day luxury camping, wildlife tracking, pro photography',
      inclusions: [
        'Premium weatherproof tents',
        'Professional mountaineer guide',
        'Gourmet trail meals',
        'Wildlife & bird tracking',
        'Professional photography session',
        'Drone video of your trek',
        'Porter support throughout',
      ],
    },
  ],
};

const DEST_IMAGES: Record<number, string> = {
  1: '/assets/kodaikanal.avif',
  2: '/assets/ooty1.jpeg',
  3: '/assets/munnar2.jpeg',
  4: '/assets/Alleppey3.jpeg',
  5: '/assets/Varkala.jpg',
  6: '/assets/coorg.jpeg',
  7: '/assets/pondicherry.jpeg',
  8: '/assets/Hampi.jpg',
  9: '/assets/chennai.webp',
  10: '/assets/kodaikanal1.jpg',
  11: '/assets/goa.jpeg',
  12: '/assets/mahabalipuram.jpeg',
  13: '/assets/kumara_parvatha.png',
  14: '/assets/kudremukh.png',
  15: '/assets/chembra_peak.png',
  16: '/assets/kumara_parvatha.png',
  17: '/assets/kudremukh.png',
  18: '/assets/kochi.png',
  19: '/assets/vishakhapatnam.png',
  20: '/assets/mangalore.png',
  21: '/assets/mysuru.png',
};

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, LoginModalComponent, AnimateOnScrollDirective],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class BookingComponent implements OnInit, OnDestroy {
  currentStep = 1;
  totalSteps = 3;
  submitted = false;
  bookingRef = '';

  isLoggedIn = false;
  showLoginModal = false;
  currentDestination: Destination | null = null;

  step1Form!: FormGroup;
  step2Form!: FormGroup;
  step3Form!: FormGroup;

  destinations = DESTINATIONS.map(d => d.name);
  today = new Date().toISOString().split('T')[0];

  private authSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const preselected = this.route.snapshot.queryParams['destination'] ?? '';

    this.step1Form = this.fb.group({
      destination: [preselected, Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      travelers: [2, [Validators.required, Validators.min(1), Validators.max(20)]],
      tripType: ['', Validators.required],
    });

    this.step2Form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      specialRequests: [''],
      dietary: this.fb.group({
        vegetarian: [false],
        nonVeg: [false],
        vegan: [false],
        glutenFree: [false],
        halal: [false],
      }),
    });

    this.step3Form = this.fb.group({
      agreeTerms: [false, Validators.requiredTrue],
    });

    // Auth subscription — update login state and pre-fill form
    this.authSub = this.authService.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;
      if (user) {
        this.step2Form.patchValue({
          fullName: user.name,
          email: user.email,
          phone: user.phone ?? '',
        });
      }
    });

    // Destination change — update preview card, reset package, recalculate check-out
    this.step1Form.get('destination')!.valueChanges.subscribe(name => {
      this.currentDestination = DESTINATIONS.find(d => d.name === name) ?? null;
      const pkgs = this.tripPackages;
      if (pkgs.length > 0) {
        this.step1Form.get('tripType')!.setValue(pkgs[0].value, { emitEvent: false });
      }
      // Recalculate check-out if check-in is already set
      this.updateCheckOutDate();
    });

    // Check-in change — auto-set check-out based on trip duration
    this.step1Form.get('checkIn')!.valueChanges.subscribe(() => {
      this.updateCheckOutDate();
    });

    // Initialise for preselected destination
    if (preselected) {
      this.currentDestination = DESTINATIONS.find(d => d.name === preselected) ?? null;
    }
    const defaultPkgs = this.tripPackages;
    if (defaultPkgs.length > 0) {
      this.step1Form.get('tripType')!.setValue(defaultPkgs[1]?.value ?? defaultPkgs[0].value);
    }
  }

  ngOnDestroy() {
    this.authSub?.unsubscribe();
  }

  get tripPackages(): TripPackage[] {
    const type = this.currentDestination?.type ?? 'Hill Station';
    return DESTINATION_PACKAGES[type] ?? DESTINATION_PACKAGES['Hill Station'];
  }

  get groupDiscount(): number {
    const travelers = this.step1Form?.get('travelers')?.value ?? 0;
    if (travelers >= 10) return 10;
    if (travelers >= 6) return 5;
    return 0;
  }

  get step1() { return this.step1Form.controls; }
  get step2() { return this.step2Form.controls; }
  get step3() { return this.step3Form.controls; }

  getDestImage(id: number): string {
    return DEST_IMAGES[id] ?? 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80';
  }

  formatPrice(price: number): string {
    return `₹${price.toLocaleString('en-IN')}`;
  }

  incrementTravelers() {
    const current = this.step1Form.get('travelers')!.value;
    if (current < 20) this.step1Form.get('travelers')!.setValue(current + 1);
  }

  decrementTravelers() {
    const current = this.step1Form.get('travelers')!.value;
    if (current > 1) this.step1Form.get('travelers')!.setValue(current - 1);
  }

  getSelectedTripType(): TripPackage | undefined {
    return this.tripPackages.find(t => t.value === this.step1Form.get('tripType')!.value);
  }

  estimatedPrice(): string {
    const pkg = this.getSelectedTripType();
    if (!pkg) return '₹0';
    const travelers = this.step1Form.get('travelers')!.value;
    const baseTotal = pkg.basePrice * travelers;
    const discountFactor = 1 - this.groupDiscount / 100;
    const total = Math.round(baseTotal * discountFactor);
    return `₹${total.toLocaleString('en-IN')}`;
  }

  onLoginSuccess() {
    this.showLoginModal = false;
  }

  nextStep() {
    if (this.currentStep === 1) {
      this.step1Form.markAllAsTouched();
      if (this.step1Form.valid) this.currentStep = 2;
    } else if (this.currentStep === 2) {
      this.step2Form.markAllAsTouched();
      if (this.step2Form.valid) this.currentStep = 3;
    }
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  goToStep(step: number) {
    if (step < this.currentStep) this.currentStep = step;
  }

  onSubmit() {
    this.step3Form.markAllAsTouched();
    if (this.step3Form.valid) {
      this.bookingRef = 'PMJ-' + Math.random().toString(36).substr(2, 8).toUpperCase();
      this.submitted = true;
    }
  }

  isFieldInvalid(form: FormGroup, field: string): boolean {
    const ctrl = form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }

  getTripDays(): number {
    if (!this.currentDestination) return 3;
    const match = this.currentDestination.duration.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 3;
  }

  updateCheckOutDate(): void {
    const checkInValue = this.step1Form.get('checkIn')!.value;
    if (!checkInValue) return;
    const checkInDate = new Date(checkInValue);
    if (isNaN(checkInDate.getTime())) return;
    const tripDays = this.getTripDays();
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + tripDays);
    const yyyy = checkOutDate.getFullYear();
    const mm = String(checkOutDate.getMonth() + 1).padStart(2, '0');
    const dd = String(checkOutDate.getDate()).padStart(2, '0');
    this.step1Form.get('checkOut')!.setValue(`${yyyy}-${mm}-${dd}`, { emitEvent: false });
  }

  downloadPDF() {
    import('jspdf').then(({ jsPDF }) => {
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      let y = 20;

      const dest = this.step1Form.get('destination')!.value;
      const checkIn = this.step1Form.get('checkIn')!.value;
      const checkOut = this.step1Form.get('checkOut')!.value;
      const travelers = this.step1Form.get('travelers')!.value;
      const pkg = this.getSelectedTripType();
      const name = this.step2Form.get('fullName')!.value;
      const email = this.step2Form.get('email')!.value;
      const phone = this.step2Form.get('phone')!.value;
      const price = this.estimatedPrice();
      const discount = this.groupDiscount;

      const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
      };

      // ── Header ──
      doc.setFillColor(27, 67, 50);
      doc.rect(0, 0, pageWidth, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('PlanMyJourney', pageWidth / 2, 18, { align: 'center' });
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('Booking Confirmation', pageWidth / 2, 28, { align: 'center' });
      y = 50;

      // ── Booking Reference ──
      doc.setFillColor(240, 253, 244);
      doc.roundedRect(margin, y, contentWidth, 14, 3, 3, 'F');
      doc.setDrawColor(187, 247, 208);
      doc.roundedRect(margin, y, contentWidth, 14, 3, 3, 'S');
      doc.setTextColor(27, 67, 50);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(`Booking Reference: ${this.bookingRef}`, pageWidth / 2, y + 9, { align: 'center' });
      y += 24;

      // ── Helper: Section heading ──
      const drawSectionHeading = (title: string) => {
        doc.setTextColor(27, 67, 50);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, y);
        y += 2;
        doc.setDrawColor(229, 231, 235);
        doc.line(margin, y, pageWidth - margin, y);
        y += 7;
      };

      // ── Helper: Detail row ──
      const drawRow = (label: string, value: string, highlight = false) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(label, margin, y);
        doc.setFont('helvetica', 'bold');
        if (highlight) {
          doc.setTextColor(22, 163, 74);
        } else {
          doc.setTextColor(26, 26, 26);
        }
        doc.text(value, pageWidth - margin, y, { align: 'right' });
        y += 2;
        doc.setDrawColor(243, 244, 246);
        doc.line(margin, y, pageWidth - margin, y);
        y += 7;
      };

      // ── Trip Details ──
      drawSectionHeading('Trip Details');
      drawRow('Destination', dest);
      drawRow('Check-in', formatDate(checkIn));
      drawRow('Check-out', formatDate(checkOut));
      drawRow('Travelers', String(travelers));
      drawRow('Package', `${pkg?.label ?? ''}`);
      if (discount > 0) {
        drawRow('Group Discount', `-${discount}% applied`, true);
      }
      y += 4;

      // ── Traveler Details ──
      drawSectionHeading('Traveler Details');
      drawRow('Name', name);
      drawRow('Email', email);
      drawRow('Phone', phone);
      y += 4;

      // ── Package Inclusions ──
      if (pkg?.inclusions?.length) {
        drawSectionHeading('Package Inclusions');
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(68, 68, 68);
        for (const inc of pkg.inclusions) {
          doc.text(`•  ${inc}`, margin + 4, y);
          y += 6;
        }
        y += 4;
      }

      // ── Total ──
      doc.setFillColor(27, 67, 50);
      doc.roundedRect(margin, y, contentWidth, 18, 3, 3, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Estimated Total', margin + 8, y + 12);
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(price, pageWidth - margin - 8, y + 12, { align: 'right' });
      y += 30;

      // ── Footer ──
      doc.setTextColor(153, 153, 153);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('Thank you for booking with PlanMyJourney!', pageWidth / 2, y, { align: 'center' });
      doc.text('Our travel experts will contact you within 24 hours to finalise your itinerary.', pageWidth / 2, y + 5, { align: 'center' });

      // ── Save ──
      doc.save(`PlanMyJourney_Booking_${this.bookingRef}.pdf`);
    });
  }

  getEmailLink(): string {
    const dest = this.step1Form.get('destination')!.value;
    const checkIn = this.step1Form.get('checkIn')!.value;
    const checkOut = this.step1Form.get('checkOut')!.value;
    const travelers = this.step1Form.get('travelers')!.value;
    const pkg = this.getSelectedTripType();
    const name = this.step2Form.get('fullName')!.value;
    const email = this.step2Form.get('email')!.value;
    const phone = this.step2Form.get('phone')!.value;
    const price = this.estimatedPrice();

    const subject = encodeURIComponent(`PlanMyJourney Booking Confirmation — ${this.bookingRef}`);
    const body = encodeURIComponent(
      `PlanMyJourney — Booking Confirmation\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Booking Reference: ${this.bookingRef}\n` +
      `Destination: ${dest}\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Travelers: ${travelers}\n` +
      `Package: ${pkg?.emoji ?? ''} ${pkg?.label ?? ''}\n` +
      `Estimated Total: ${price}\n\n` +
      `Traveler Details:\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Thank you for booking with PlanMyJourney!\n` +
      `Our travel experts will contact you within 24 hours.`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
