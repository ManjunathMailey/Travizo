import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Destination, DESTINATIONS } from './destinations-data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

const GALLERY_MAP: Record<number, string[]> = {
  // Kodaikanal — misty lake, pine forest, Coaker's Walk, waterfall
  1: [
    '/assets/kodaikanal.avif',
    '/assets/kodaikanal1.jpg',
    '/assets/kodaikanal4.jpg',
    '/assets/kodaikanal3.jpg',
  ],
  // Ooty — tea estate, Nilgiri hills, botanical garden, valley
  2: [
    '/assets/ooty1.jpeg',
    '/assets/ooty2.jpeg',
    '/assets/ooty3.avif',
    '/assets/ooty4.jpeg',
  ],
  // Munnar — tea pickers, green estate, Eravikulam, spice market
  3: [
    '/assets/munnar1.jpeg',
    '/assets/munnar2.jpeg',
    '/assets/munnar.jpg',
    '/assets/Munnar-18.jpg',
  ],
  // Alleppey — houseboat, backwater, fishing, sunset
  4: [
    '/assets/Alleppey1.jpeg',
    '/assets/Alleppey2.jpeg',
    '/assets/Alleppey3.jpeg',
    '/assets/Alleppey4.jpeg',
  ],
  // Varkala — red cliff, beach, coastal temple, cliff cafe
  5: [
    '/assets/varkala1.jpg',
    '/assets/varkala2.jpeg',
    '/assets/varkala3.jpeg',
    '/assets/Varkala.jpg',
  ],
  // Coorg — coffee plantation, estate, misty forest, waterfall
  6: [
    '/assets/coorg1.jpeg',
    '/assets/coorg2.jpg',
    '/assets/coorg3.jpg',
    '/assets/coorg.jpeg',
  ],
  // Pondicherry — French Quarter, colonial villa, Promenade, Auroville
  7: [
    '/assets/pondicherry1.jpeg',
    '/assets/pondicherry2.webp',
    '/assets/pondicherry.jpeg',
    '/assets/pondicherry.jpeg',
  ],
  // Hampi — Vijayanagara ruins, Virupaksha, boulders, Vittala chariot
  8: [
    '/assets/Hampi.jpg',
    '/assets/Hampi.jpg',
    '/assets/Hampi.jpg',
    '/assets/Hampi.jpg',
  ],
  // Chennai — Marina Beach, Kapaleeshwarar temple, Fort St George, silk market
  9: [
    '/assets/chennai.webp',
    '/assets/chennai.webp',
    '/assets/chennai.webp',
    '/assets/chennai.webp',
  ],
  // Kodaikanal Extended — mountain trail, lake, pine, waterfall
  10: [
    '/assets/kodaikanal1.jpg',
    '/assets/kodaikanal3.jpg',
    '/assets/kodaikanal4.jpg',
    '/assets/kodaikanal.avif',
  ],
  // Goa — sun beach, Portuguese church, fort, Dudhsagar falls
  11: [
    '/assets/goa.jpeg',
    '/assets/goa.jpeg',
    '/assets/goa.jpeg',
    '/assets/goa.jpeg',
  ],
  // Mahabalipuram — Shore Temple, Arjuna's Penance, Five Rathas, sea
  12: [
    '/assets/mahabalipuram.jpeg',
    '/assets/mahabalipuram.jpeg',
    '/assets/mahabalipuram.jpeg',
    '/assets/mahabalipuram.jpeg',
  ],
  13: ['/assets/kumara_parvatha.png'],
  14: ['/assets/kudremukh.png'],
  15: ['/assets/chembra_peak.png'],
  16: ['/assets/kumara_parvatha.png'],
  17: ['/assets/kudremukh.png'],
  18: ['/assets/kochi.png'],
  19: ['/assets/vishakhapatnam.png'],
  20: ['/assets/mangalore.png'],
  21: ['/assets/mysuru.png'],
};

const DEFAULT_GALLERY = [
  '/assets/chennai.webp',
  '/assets/kodaikanal.avif',
  '/assets/munnar1.jpeg',
  '/assets/ooty1.jpeg',
];

@Component({
  standalone: true,
  selector: 'app-destination-detail',
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective],
  templateUrl: './destination-detail.html',
  styleUrl: './destination-detail.css',
})
export class DestinationDetailComponent implements OnInit {
  destination: Destination | null = null;
  mapUrl: SafeResourceUrl | null = null;
  galleryImages: string[] = [];
  activeImage = '';
  relatedDestinations: Destination[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        const dest = DESTINATIONS.find(d => d.id === id) ?? null;
        if (dest) {
          this.destination = dest;
          const url = `https://www.google.com/maps?q=${dest.coords}&z=12&output=embed`;
          this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.galleryImages = GALLERY_MAP[id] ?? DEFAULT_GALLERY;
          this.activeImage = this.galleryImages[0];
          this.relatedDestinations = DESTINATIONS.filter(d => d.id !== id && d.type === dest.type).slice(0, 2);
          if (this.relatedDestinations.length < 2) {
            const extras = DESTINATIONS.filter(d => d.id !== id && !this.relatedDestinations.includes(d)).slice(0, 2 - this.relatedDestinations.length);
            this.relatedDestinations = [...this.relatedDestinations, ...extras];
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  setActiveImage(img: string) {
    this.activeImage = img;
  }

  getRelatedImage(id: number): string {
    return (GALLERY_MAP[id] ?? DEFAULT_GALLERY)[0];
  }

  getBestSeason(type: string): string {
    const map: Record<string, string> = {
      'Hill Station': 'October — March',
      'Beach': 'November — February',
      'Heritage': 'October — February',
      'Backwater': 'September — March',
      'City': 'Year-round',
      'Trekking': 'October — February',
    };
    return map[type] ?? 'October — February';
  }

  getDifficulty(type: string): string {
    const map: Record<string, string> = {
      'Hill Station': 'Moderate',
      'Beach': 'Easy',
      'Heritage': 'Easy',
      'Backwater': 'Easy',
      'City': 'Easy',
      'Trekking': 'Challenging',
    };
    return map[type] ?? 'Moderate';
  }

  getPrice(duration: string): string {
    const days = parseInt(duration);
    const base = 8500 + days * 2200;
    return `₹${base.toLocaleString('en-IN')}`;
  }
}
