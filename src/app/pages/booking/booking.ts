import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { DESTINATIONS, Destination } from '../destinations/destinations-data';
import { AuthService } from '../../services/auth.service';
import { LoginModalComponent } from '../../components/login-modal/login-modal';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { NotificationService } from '../../services/notification.service';
import { BookingService } from '../../services/booking.service';

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
  2: '/assets/ooty1 (2).jpeg',
  3: '/assets/munnar11.jpeg',
  4: '/assets/Alleppey3.jpeg',
  5: '/assets/varkala1.jpg',
  6: '/assets/coorg11.jpeg',
  7: '/assets/pondicherry.jpeg',
  8: '/assets/Hampi.jpg',
  9: '/assets/chennai.webp',
  11: '/assets/goa.jpeg',
  12: '/assets/mahabalipuram.jpeg',
  13: '/assets/kumara_parvatha.png',
  14: '/assets/kudremukh.png',
  15: '/assets/chembra_peak.png',
  16: '/assets/kumara_parvatha.png',
  17: '/assets/kudremukh.png',
  18: '/assets/kochi.png',
  19: '/assets/vishakhapatnam1.jpg',
  20: '/assets/mangalore.png',
  21: '/assets/mysuru.png',
  // North India
  22: '/assets/manali1.jpg',
  23: '/assets/Shimla1.jpg',
  24: '/assets/jaipur1.jpg',
  25: '/assets/Varanasi1.jpg',
  26: '/assets/Agra1.jpg',
  27: '/assets/Leh Ladakh1.jpg',
  28: '/assets/Kashmir1.jpg',
  29: '/assets/Rishikesh1.jpg',
  30: '/assets/Amritsar1.jpg',
  31: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=800&q=80',
  32: 'https://images.unsplash.com/photo-1622215011787-10d2ea0b7765?w=800&q=80',
  33: 'https://images.unsplash.com/photo-1523544261025-8ae7b4f2ee72?w=800&q=80',
  34: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
  35: '/assets/Gokarna1.jpg',
  36: 'https://images.unsplash.com/photo-1590123437476-d45f6c99ceec?w=800&q=80',
  37: '/assets/Chilika Lake1.jpg',
};

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink, LoginModalComponent, AnimateOnScrollDirective],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class BookingComponent implements OnInit, OnDestroy {
  currentStep = 1;
  totalSteps = 3;
  submitted = false;
  bookingRef = '';

  // Razorpay payment modal
  showPaymentModal = false;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'wallet' = 'upi';
  paymentProcessing = false;
  paymentError = '';

  // Card fields (simulated)
  cardNumber = '';
  cardExpiry = '';
  cardCvv = '';
  cardName = '';
  upiId = '';
  selectedUpiApp = '';
  selectedUpiHandle = '';

  readonly upiApps = [
    { name: 'GPay',    label: 'G Pay',    handle: 'okicici'   },
    { name: 'PhonePe', label: 'PhonePe',  handle: 'ybl'       },
    { name: 'Paytm',   label: 'Paytm',    handle: 'paytm'     },
    { name: 'BHIM',    label: 'BHIM',     handle: 'upi'       },
  ];

  isLoggedIn = false;
  showLoginModal = false;
  currentDestination: Destination | null = null;

  showMoodBar = true;
  activeMood: string | null = null;

  readonly moods = [
    { id: 'serene',     icon: '🌊', label: 'Serene Escape',     types: ['Backwater', 'Hill Station'] },
    { id: 'adrenaline', icon: '⛰️', label: 'Adrenaline Rush',   types: ['Trekking'] },
    { id: 'hearts',     icon: '💕', label: 'Hearts Entwined',   types: ['Heritage', 'Beach'] },
    { id: 'soul',       icon: '🕌', label: 'Soul Seeking',      types: ['Heritage'] },
    { id: 'urban',      icon: '🏙️', label: 'Urban Canvas',      types: ['City'] },
    { id: 'tropical',   icon: '🏖️', label: 'Tropical Paradise', types: ['Beach'] },
  ];

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
    private notify: NotificationService,
    private bookingService: BookingService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    const preselected = this.route.snapshot.queryParams['destination'] ?? '';
    if (preselected) this.showMoodBar = false;

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
      this.cdr.detectChanges();
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
    if (DEST_IMAGES[id]) return DEST_IMAGES[id];
    // Fall back to the destination's own image field (e.g. North India & new destinations)
    const dest = DESTINATIONS.find(d => d.id === id);
    if (dest?.image) return dest.image;
    return 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80';
  }

  formatPrice(price: number): string {
    return `₹${price.toLocaleString('en-IN')}`;
  }

  selectMood(id: string) {
    if (this.activeMood === id) {
      this.activeMood = null;
      this.destinations = DESTINATIONS.map(d => d.name);
    } else {
      this.activeMood = id;
      this.destinations = DESTINATIONS.filter(d => d.moodTags.includes(id)).map(d => d.name);
    }
    // Reset destination selection when mood changes
    this.step1Form?.get('destination')?.setValue('');
    this.currentDestination = null;
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
      // Open Razorpay payment modal instead of directly confirming
      this.paymentError = '';
      this.showPaymentModal = true;
    }
  }

  closePaymentModal() {
    if (!this.paymentProcessing) {
      this.showPaymentModal = false;
    }
  }

  async processPayment() {
    this.paymentError = '';

    // Basic validation per method
    if (this.paymentMethod === 'upi') {
      const uid = this.upiId.trim();
      const atIdx = uid.indexOf('@');
      if (!uid || atIdx <= 0 || atIdx === uid.length - 1) {
        this.paymentError = 'Enter a valid UPI ID — e.g. 9876543210@ybl or name@okicici';
        return;
      }
    } else if (this.paymentMethod === 'card') {
      const rawCard = this.cardNumber.replace(/\s/g, '');
      if (!rawCard || rawCard.length < 16) {
        this.paymentError = 'Enter a valid 16-digit card number.';
        return;
      }
      if (!this.cardExpiry || !/^\d{2}\/\d{2}$/.test(this.cardExpiry)) {
        this.paymentError = 'Enter expiry as MM/YY.';
        return;
      }
      if (!this.cardCvv || this.cardCvv.length < 3) {
        this.paymentError = 'Enter a valid CVV.';
        return;
      }
      if (!this.cardName) {
        this.paymentError = 'Enter the cardholder name.';
        return;
      }
    }

    this.paymentProcessing = true;
    this.cdr.detectChanges();

    await new Promise<void>(resolve => setTimeout(resolve, 1500));
    this.paymentProcessing = false;
    this.showPaymentModal = false;
    this.confirmBooking();
    this.cdr.detectChanges();
  }

  private confirmBooking() {
    this.bookingRef = 'PMJ-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    this.submitted = true;

    const pkg = this.getSelectedTripType();
    const priceStr = this.estimatedPrice();
    const priceNum = parseInt(priceStr.replace(/[₹,]/g, ''), 10) || 0;
    this.bookingService.saveBooking({
      ref: this.bookingRef,
      destination: this.step1Form.get('destination')!.value,
      packageName: pkg?.label ?? '',
      packageEmoji: pkg?.emoji ?? '',
      travelers: this.step1Form.get('travelers')!.value,
      checkIn: this.step1Form.get('checkIn')!.value,
      checkOut: this.step1Form.get('checkOut')!.value,
      totalAmount: priceStr,
      totalAmountNum: priceNum,
      travelerName: this.step2Form.get('fullName')!.value,
      travelerEmail: this.step2Form.get('email')!.value,
      travelerPhone: this.step2Form.get('phone')!.value,
      bookedAt: new Date().toISOString(),
    });

    this.notify.success(`Payment successful! Booking confirmed: ${this.bookingRef} ✅`);
  }

  selectUpiApp(appName: string, handle: string) {
    this.selectedUpiApp = appName;
    this.selectedUpiHandle = handle;
    this.paymentError = '';
  }

  formatCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '').substring(0, 16);
    value = value.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber = value;
    input.value = value;
  }

  formatExpiry(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '').substring(0, 4);
    if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2);
    this.cardExpiry = value;
    input.value = value;
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

  async downloadPDF() {
    const { jsPDF } = await import('jspdf');
    const doc   = new jsPDF('p', 'mm', 'a4');
    const W     = doc.internal.pageSize.getWidth();
    const ML    = 20;
    const MR    = 20;
    const CW    = W - ML - MR;
    let y       = 18;

    const dest      = this.step1Form.get('destination')!.value;
    const checkIn   = this.step1Form.get('checkIn')!.value;
    const checkOut  = this.step1Form.get('checkOut')!.value;
    const travelers = this.step1Form.get('travelers')!.value;
    const pkg       = this.getSelectedTripType();
    const name      = this.step2Form.get('fullName')!.value;
    const email     = this.step2Form.get('email')!.value;
    const phone     = this.step2Form.get('phone')!.value;
    const discount  = this.groupDiscount;

    const base    = pkg?.basePrice ?? 0;
    const total   = base * travelers;
    const disAmt  = Math.round(total * discount / 100);
    const final   = total - disAmt;
    const inr     = (n: number) => `Rs. ${n.toLocaleString('en-IN')}`;
    const fmtDate = (s: string) =>
      new Date(s).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

    // Load image via canvas → ensures JPEG output regardless of source format (AVIF, WebP, PNG)
    let imgData: string | null = null;
    if (this.currentDestination) {
      try {
        const imgUrl = this.getDestImage(this.currentDestination.id);
        const img = new Image();
        if (imgUrl.startsWith('http')) img.crossOrigin = 'anonymous';
        await new Promise<void>(resolve => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = imgUrl;
        });
        if (img.naturalWidth > 0) {
          const canvas = document.createElement('canvas');
          const maxW = 800;
          const ratio = maxW / img.naturalWidth;
          canvas.width = maxW;
          canvas.height = Math.round(img.naturalHeight * ratio);
          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          imgData = canvas.toDataURL('image/jpeg', 0.85);
        }
      } catch { imgData = null; }
    }

    // ── HEADER ─────────────────────────────────────────────────
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text('TRAVIZO', ML, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`Booking Ref: ${this.bookingRef}`, W - MR, y, { align: 'right' });
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text('Travel Booking Confirmation', ML, y);
    doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, W - MR, y, { align: 'right' });
    y += 4;

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.7);
    doc.line(ML, y, W - MR, y);
    y += 8;

    // ── DESTINATION BLOCK ───────────────────────────────────────
    if (imgData) {
      const iW = 66;
      const iH = 44;
      doc.addImage(imgData, 'JPEG', ML, y, iW, iH, undefined, 'FAST');

      const tx = ML + iW + 8;
      const tw = CW - iW - 8;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.setTextColor(0, 0, 0);
      doc.text(dest, tx, y + 8, { maxWidth: tw });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(80, 80, 80);
      doc.text(`Type: ${this.currentDestination?.type ?? ''}`, tx, y + 17);
      doc.text(`Duration: ${this.currentDestination?.duration ?? ''}`, tx, y + 24);
      doc.text(`Check-in:  ${fmtDate(checkIn)}`, tx, y + 31);
      doc.text(`Check-out: ${fmtDate(checkOut)}`, tx, y + 38);

      y += iH + 6;
    } else {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.setTextColor(0, 0, 0);
      doc.text(dest, ML, y + 6);
      y += 14;
    }

    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(ML, y, W - MR, y);
    y += 7;

    // ── HELPERS ─────────────────────────────────────────────────
    const secHead = (title: string) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(0, 0, 0);
      doc.text(title, ML, y);
      y += 2;
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.4);
      doc.line(ML, y, W - MR, y);
      y += 5;
    };

    const ROW = 6.5;
    const row = (label: string, value: string, bold = false) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(110, 110, 110);
      doc.text(label, ML, y);
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      doc.setTextColor(15, 15, 15);
      doc.text(value, W - MR, y, { align: 'right' });
      doc.setDrawColor(230, 230, 230);
      doc.setLineWidth(0.2);
      doc.line(ML, y + 1.8, W - MR, y + 1.8);
      y += ROW;
    };

    // ── TRIP DETAILS ────────────────────────────────────────────
    secHead('TRIP DETAILS');
    row('Destination', dest, true);
    row('Destination Type', this.currentDestination?.type ?? '—');
    row('Trip Duration', this.currentDestination?.duration ?? '—');
    row('Check-in Date', fmtDate(checkIn));
    row('Check-out Date', fmtDate(checkOut));
    row('Number of Travelers', `${travelers} person${travelers > 1 ? 's' : ''}`);
    row('Package', `${pkg?.label ?? '—'}`, true);
    y += 5;

    // ── TRAVELER DETAILS ────────────────────────────────────────
    secHead('TRAVELER DETAILS');
    row('Full Name', name, true);
    row('Email Address', email);
    row('Phone Number', phone);
    y += 5;

    // ── PACKAGE INCLUSIONS ──────────────────────────────────────
    if (pkg?.inclusions?.length) {
      secHead('PACKAGE INCLUSIONS');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(55, 55, 55);
      for (const inc of pkg.inclusions) {
        const safeInc = inc.replace(/★/g, '*').replace(/[^\x00-\x7F]/g, '');
        doc.text(`\u2022  ${safeInc}`, ML + 2, y);
        y += 5.5;
      }
      y += 4;
    }

    // ── PRICE BREAKDOWN ─────────────────────────────────────────
    secHead('PRICE BREAKDOWN');
    row(`Base Price  (${inr(base)} \u00D7 ${travelers} traveler${travelers > 1 ? 's' : ''})`, inr(total));
    if (discount > 0) row(`Group Discount (${discount}%)`, `\u2212 ${inr(disAmt)}`);
    y += 3;

    // Total (double line, bold)
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(ML, y, W - MR, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('TOTAL AMOUNT', ML, y);
    doc.text(inr(final), W - MR, y, { align: 'right' });
    y += 3;
    doc.setLineWidth(0.5);
    doc.line(ML, y, W - MR, y);
    y += 12;

    // ── FOOTER ──────────────────────────────────────────────────
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(ML, y, W - MR, y);
    y += 6;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(140, 140, 140);
    doc.text(
      'Thank you for choosing TRAVIZO. Our team will contact you within 24 hours to confirm your itinerary.',
      W / 2, y, { align: 'center', maxWidth: CW }
    );
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text('travizo.in  \u00B7  support@travizo.in  \u00B7  +91-1800-TRZ-TRIPS',
      W / 2, y, { align: 'center' });

    doc.save(`TRAVIZO_Receipt_${this.bookingRef}.pdf`);
    this.notify.success('Receipt downloaded! \uD83D\uDCC4');
  }


}
