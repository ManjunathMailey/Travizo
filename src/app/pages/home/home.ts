import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESTINATIONS } from '../destinations/destinations-data';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

const DEST_IMAGES: Record<number, string> = {
  1: '/assets/kodaikanal.avif',
  2: '/assets/ooty1 (2).jpeg',
  3: '/assets/munnar11.jpeg',
  4: '/assets/Alleppey.jpeg',
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
  16: '/assets/Agasthyarkoodam13.jpeg',
  17: '/assets/Tadiyandamol11.jpeg',
  18: '/assets/kochi.png',
  19: '/assets/vishakhapatnam1.jpg',
  20: '/assets/mangalore.png',
  21: '/assets/mysuru.png',
  22: '/assets/manali1.jpg',
  23: '/assets/Shimla1.jpg',
  24: '/assets/jaipur1.jpg',
  25: '/assets/Varanasi1.jpg',
  26: '/assets/Agra1.jpg',
  27: '/assets/Leh Ladakh1.jpg',
  28: '/assets/Kashmir1.jpg',
  29: '/assets/Rishikesh1.jpg',
  30: '/assets/Amritsar1.jpg',
  31: '/assets/Darjeeling11.jpeg',
  32: '/assets/Nainital11.jpeg',
  33: '/assets/Udaipur11.jpeg',
  34: '/assets/delhi11.jpeg',
  35: '/assets/Gokarna1.jpg',
  36: '/assets/Kumarakom11.jpeg',
  37: '/assets/Chilika Lake1.jpg',
};

interface Mood {
  id: string;
  icon: string;
  label: string;
  desc: string;
  types: string[];
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, AnimateOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  featuredDestinations = DESTINATIONS.slice(0, 6);
  activeMood: string | null = null;

  readonly heroImages = [
    '/assets/varkala1.jpg',
    '/assets/munnar11.jpeg',
    '/assets/kodaikanal.avif',
    '/assets/mysuru.png',
    '/assets/chembra_peak.png',
    '/assets/mangalore.png',
    '/assets/kochi.png',
    '/assets/coorg11.jpeg',
  ];
  heroIndex = 0;
  private slideInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Run outside Angular zone so scroll-triggered change detection
    // never resets or interrupts the hero image rotation timer
    this.zone.runOutsideAngular(() => {
      this.slideInterval = setInterval(() => {
        this.heroIndex = (this.heroIndex + 1) % this.heroImages.length;
        // Re-enter zone only to update the DOM binding
        this.zone.run(() => this.cdr.detectChanges());
      }, 5000);
    });
  }

  ngOnDestroy() {
    if (this.slideInterval) clearInterval(this.slideInterval);
  }

  readonly moods: Mood[] = [
    {
      id: 'serene',
      icon: '🌊',
      label: 'Serene Escape',
      desc: 'Peaceful retreats for rest, renewal, and tranquility',
      types: ['Backwater', 'Hill Station'],
      color: '#4a90d9',
    },
    {
      id: 'adrenaline',
      icon: '⛰️',
      label: 'Adrenaline Rush',
      desc: 'Thrilling adventures for daring souls and thrill-seekers',
      types: ['Trekking'],
      color: '#e67e22',
    },
    {
      id: 'hearts',
      icon: '💕',
      label: 'Hearts Entwined',
      desc: 'Intimate moments and romantic escapes for two',
      types: ['Heritage', 'Beach'],
      color: '#e74c3c',
    },
    {
      id: 'soul',
      icon: '🕌',
      label: 'Soul Seeking',
      desc: 'Spiritual enlightenment and inner peace journeys',
      types: ['Heritage'],
      color: '#8e44ad',
    },
    {
      id: 'urban',
      icon: '🏙️',
      label: 'Urban Canvas',
      desc: 'Vibrant cities, culture, and cosmopolitan experiences',
      types: ['City'],
      color: '#2c3e50',
    },
    {
      id: 'tropical',
      icon: '🏖️',
      label: 'Tropical Paradise',
      desc: 'Sun, sand, sea, and endless island bliss',
      types: ['Beach'],
      color: '#16a085',
    },
  ];

  get moodDestinations() {
    if (!this.activeMood) return [];
    return DESTINATIONS.filter(d => d.moodTags.includes(this.activeMood!)).slice(0, 6);
  }

  get activeMoodObj(): Mood | null {
    return this.moods.find(m => m.id === this.activeMood) ?? null;
  }

  selectMood(id: string) {
    this.activeMood = this.activeMood === id ? null : id;
  }

  getDestImage(id: number): string {
    const ni = DESTINATIONS.find(d => d.id === id);
    if (ni && ni.image && ni.image.startsWith('http')) return ni.image;
    return DEST_IMAGES[id] ?? 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80';
  }
}
