import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESTINATIONS } from '../destinations/destinations-data';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

const UNSPLASH_IMAGES: Record<number, string> = {
  1: '/assets/kodaikanal.avif',  // Kodaikanal — misty mountain lake
  2: '/assets/ooty1.jpeg',  // Ooty — Nilgiri tea gardens
  3: '/assets/munnar2.jpeg',     // Munnar — tea estate green hills
  4: '/assets/Alleppey.jpeg',  // Alleppey — Kerala houseboat
  5: '/assets/varkala1.jpg',  // Varkala — red cliff beach
  6: '/assets/coorg1.jpeg',  // Coorg — coffee plantation
  7: '/assets/pondicherry.jpeg',  // Pondicherry — French Quarter streets
  8: '/assets/Hampi.jpg',  // Hampi — Vijayanagara ruins
  9: '/assets/chennai.webp',  // Chennai — Marina Beach
  10: '/assets/kodaikanal1.jpg', // Kodaikanal Extended — mountain trails
  11: '/assets/goa.jpeg', // Goa — sun-drenched beach
  12: '/assets/mahabalipuram.jpeg', // Mahabalipuram — Shore Temple
  13: '/assets/kumara_parvatha.png', // Kumara Parvatha
  14: '/assets/kudremukh.png', // Kudremukh
  15: '/assets/chembra_peak.png', // Chembra Peak
  16: '/assets/kumara_parvatha.png', // Agasthyarkoodam
  17: '/assets/kudremukh.png', // Tadiyandamol
  18: '/assets/kochi.png', // Kochi
  19: '/assets/vishakhapatnam.png', // Vishakhapatnam
  20: '/assets/mangalore.png', // Mangalore
  21: '/assets/mysuru.png', // Mysuru
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, AnimateOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  featuredDestinations = DESTINATIONS.slice(0, 6);

  getDestImage(id: number): string {
    return UNSPLASH_IMAGES[id] ?? 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80';
  }
}
