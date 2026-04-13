import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Destination, DESTINATIONS } from './destinations-data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

const GALLERY_MAP: Record<number, string[]> = {
  // Kodaikanal — 5 images: misty lake, pine forest, Coaker's Walk, waterfall, valley
  1: [
    '/assets/Kodaikanal11.jpg',
    '/assets/Kodaikanal12.jpg',
    '/assets/Kodaikanal14.jpg',
    '/assets/Kodaikanal13.jpg',
    '/assets/kodaikanal.avif',
  ],
  // Ooty — 5 images: tea estate, Nilgiri hills, botanical garden, valley, sunset
  2: [
    '/assets/ooty1 (2).jpeg',
    '/assets/ooty3.jpeg',
    '/assets/ooty13.jpeg',
    '/assets/ooty14.jpeg',
    '/assets/ooty6.jpeg',
  ],
  // Munnar — 5 images: tea pickers, green estate, Eravikulam, spice market, mist
  3: [
    '/assets/munnar11.jpeg',
    '/assets/munnar12.jpeg',
    '/assets/munnar13.jpeg',
    '/assets/munnar14.jpeg',
    '/assets/munnar15.jpeg',
  ],
  // Alleppey — 5 images: houseboat, backwater, fishing, sunset, village
  4: [
    '/assets/Alleppey14.jpeg',
    '/assets/Alleppey2.jpeg',
    '/assets/Alleppey3.jpeg',
    '/assets/Alleppey4.jpeg',
    '/assets/Alleppey14.jpeg',
  ],
  // Varkala — 5 images: red cliff, beach, coastal temple, cliff cafe, sunset
  5: [
    '/assets/varkala1.jpg',
    '/assets/varkala11.jpeg',
    '/assets/varkala13.jpeg',
    '/assets/varkala14.jpeg',
    '/assets/varkala12.jpeg',
  ],
  // Coorg — 5 images: coffee plantation, estate, misty forest, waterfall, hills
  6: [
    '/assets/coorg11.jpeg',
    '/assets/coorg12.jpeg',
    '/assets/coorg13.jpeg',
    '/assets/coorg14.jpeg',
    '/assets/coorg15.jpeg',
  ],
  // Pondicherry — 5 images: French Quarter, colonial villa, Promenade, Auroville, temple
  7: [
    '/assets/pondicherry1.jpeg',
    '/assets/pondicherry2.webp',
    '/assets/pondicherry.jpeg',
    '/assets/pondicherry14.jpeg',
    '/assets/pondicherry13.jpeg',
  ],
  // Hampi — 5 unique images: Vijayanagara ruins, Virupaksha, boulders, Vittala chariot, royal enclosure
  8: [
    '/assets/Hampi.jpg',
    '/assets/Hampi13.jpeg',
    '/assets/Hampi11.jpeg',
    '/assets/Hampi12.jpeg',
  ],
  // Chennai — 5 images: Marina Beach, Kapaleeshwarar, Fort St George, silk market, harbour
  9: [
    '/assets/chennai.webp',
    '/assets/chennai11.jpeg',
    '/assets/chennai13.jpeg',
    '/assets/chennai11.jpeg',
    '/assets/chennai12.jpeg',
  ],
  // Goa — 5 images: beach, Portuguese church, fort, Dudhsagar, sunset
  11: [
    '/assets/goa.jpeg',
    '/assets/goa11.jpeg',
    '/assets/goa12.jpeg',
    '/assets/goa13.jpeg',
    '/assets/goa14.jpeg',
  ],
  // Mahabalipuram — 5 images: Shore Temple, Arjuna's Penance, Five Rathas, sea, carvings
  12: [
    '/assets/mahabalipuram.jpeg',
    '/assets/mahabalipuram11.jpeg',
    '/assets/mahabalipuram13.jpeg',
    '/assets/mahabalipuram14.jpeg',
    '/assets/mahabalipuram12.jpeg',
  ],
  // Kumara Parvatha — 5 images
  13: [
    '/assets/kumara_parvatha.png',
    '/assets/kumaraparvatha11.jpeg',
    '/assets/kumaraparvatha13.jpeg',
    '/assets/kumaraparvath14.jpeg',
    '/assets/kumaraparvatha11.jpeg',
  ],
  // Kudremukh — 5 images
  14: [
    '/assets/kudremukh13.jpeg',
    '/assets/kudremukh11.jpeg',
    '/assets/kudremukh12.jpeg',
    '/assets/kudremukh13.jpeg',
    '/assets/kudremukh14.jpeg',
  ],
  // Chembra Peak — 5 images
  15: [
    '/assets/chembra_peak.png',
    '/assets/chembra11.jpeg',
    '/assets/chembra14.jpeg',
    '/assets/chembra16.jpeg',
    '/assets/chembra14.jpeg',
  ],
  // Agasthyarkoodam Trek — 5 images
  16: [
    '/assets/Agasthyarkoodam11.jpeg',
    '/assets/Agasthyarkoodam12.jpeg',
    '/assets/Agasthyarkoodam13.jpeg',
    '/assets/Agasthyarkoodam14.jpeg',
    '/assets/Agasthyarkoodam15.jpeg',
  ],
  // Meesapulimala — 5 images
  17: [
    '/assets/Tadiyandamol11.jpeg',
    '/assets/Tadiyandamol12.jpeg',
    '/assets/Tadiyandamol13.jpeg',
    '/assets/Tadiyandamol11.jpeg',
    '/assets/Tadiyandamol13.jpeg',
  ],
  // Kochi — 5 images
  18: [
    '/assets/kochi.png',
    '/assets/kochi11.jpeg',
    '/assets/kochi12.jpeg',
    '/assets/kochi13.jpeg',
    '/assets/kochi14.jpeg',
  ],
  // Visakhapatnam — 5 images
  19: [
    '/assets/vishakhapatnam1.jpg',
    '/assets/vishakhapatnam2.jpg',
    '/assets/vishakhapatnam3.jpg',
    '/assets/vishakhapatnam4.jpg',
    '/assets/Visakhapatnam.jpg',
  ],
  // Mangalore — 5 images
  20: [
    '/assets/manglore.png',
    '/assets/manglore11.jpeg',
    '/assets/manglore12.jpeg',
    '/assets/manglore13.jpeg',
    '/assets/manglore11.jpeg',
  ],
  // Mysuru — 5 images: palace, gardens, heritage, market, festival
  21: [
    '/assets/mysuru.png',
    '/assets/mysuru11.jpeg',
    '/assets/mysuru12.jpeg',
    '/assets/mysuru13.jpeg',
    '/assets/mysuru14.jpeg',
  ],
  // ─── North India ───────────────────────────────────────────────
  // Manali — 5 images
  22: [
    '/assets/manali1.jpg',
    '/assets/manali2.jpg',
    '/assets/manali3.jpg',
    '/assets/manali4.jpg',
    '/assets/manali5.jpg',
  ],
  // Shimla — 5 images
  23: [
    '/assets/Shimla1.jpg',
    '/assets/Shimla2.jpg',
    '/assets/Shimla3.jpg',
    '/assets/Shimla4.jpg',
    '/assets/Shimla5.jpg',
  ],
  // Jaipur — 5 images
  24: [
    '/assets/jaipur1.jpg',
    '/assets/jaipur2.jpg',
    '/assets/jaipur3.jpg',
    '/assets/jaipur4.jpg',
    '/assets/jaipur5.jpg',
  ],
  // Varanasi — 5 images
  25: [
    '/assets/Varanasi1.jpg',
    '/assets/Varanasi2.jpg',
    '/assets/Varanasi3.jpg',
    '/assets/Varanasi4.jpg',
    '/assets/Varanasi5.jpg',
  ],
  // Agra — 5 images
  26: [
    '/assets/Agra1.jpg',
    '/assets/Agra2.jpg',
    '/assets/Agra3.jpg',
    '/assets/Agra4.jpg',
    '/assets/Agra5.jpg',
  ],
  // Leh Ladakh — 5 images
  27: [
    '/assets/Leh Ladakh1.jpg',
    '/assets/Leh Ladakh2.jpg',
    '/assets/Leh Ladakh3.jpg',
    '/assets/Leh Ladakh4.jpg',
    '/assets/Leh Ladakh5.jpg',
  ],
  // Kashmir — 5 images
  28: [
    '/assets/Kashmir1.jpg',
    '/assets/Kashmir2.jpg',
    '/assets/Kashmir3.jpg',
    '/assets/Kashmir4.jpg',
    '/assets/Kashmir1.jpg',
  ],
  // Rishikesh — 5 images
  29: [
    '/assets/Rishikesh1.jpg',
    '/assets/Rishikesh2.jpg',
    '/assets/Rishikesh3.jpg',
    '/assets/Rishikesh4.jpg',
    '/assets/Rishikesh5.jpg',
  ],
  // Amritsar — 5 images
  30: [
    '/assets/Amritsar1.jpg',
    '/assets/Amritsar2.jpg',
    '/assets/Amritsar3.jpg',
    '/assets/Amritsar4.jpg',
    '/assets/Amritsar5.jpg',
  ],
  // Darjeeling — 5 images
  31: [
    '/assets/Darjeeling11.jpeg',
    '/assets/Darjeeling12.jpeg',
    '/assets/Darjeeling13.jpeg',
    '/assets/Darjeeling14.jpeg',
    '/assets/Darjeeling15.jpeg',
  ],
  // Nainital — 5 images
  32: [
    '/assets/Nainital11.jpeg',
    '/assets/Nainital12.jpeg',
    '/assets/Nainital13.jpeg',
    '/assets/Nainital14.jpeg',
    '/assets/Nainital15.jpeg',
  ],
  // Udaipur — 5 images
  33: [
    '/assets/Udaipur11.jpeg',
    '/assets/Udaipur12.jpeg',
    '/assets/Udaipur13.jpeg',
    '/assets/Udaipur14.jpeg',
    '/assets/Udaipur15.jpeg',
  ],
  // Delhi — 5 images
  34: [
    '/assets/delhi11.jpeg',
    '/assets/delhi12.jpeg',
    '/assets/delhi13.jpeg',
    '/assets/delhi14.jpeg',
    '/assets/delhi15.jpeg',
  ],
  // Gokarna — 5 images
  35: [
    '/assets/Gokarna1.jpg',
    '/assets/Gokarna2.jpg',
    '/assets/Gokarna3.jpg',
    '/assets/Gokarna4.jpg',
    '/assets/Gokarna5.jpg',
  ],
  // Kumarakom — 5 images
  36: [
    '/assets/Kumarakom11.jpg',
    '/assets/Kumarakom12.jpg',
    '/assets/Kumarakom13.jpg',
    '/assets/Kumarakom14.jpg',
    '/assets/Kumarakom15.jpg',
  ],
  // Chilika Lake — 5 images
  37: [
    '/assets/Chilika Lake1.jpg',
    '/assets/Chilika Lake2.jpg',
    '/assets/Chilika Lake3.jpg',
    '/assets/Chilika Lake4.jpg',
    '/assets/Chilika Lake5.jpg',
  ],
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
