import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Destination, DESTINATIONS } from './destinations-data';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

const UNSPLASH_MAP: Record<number, string> = {
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
  13: '/assets/kumara_parvatha.png', // Kumara Parvatha — Western Ghats trek
  14: '/assets/kudremukh.png', // Kudremukh — rolling grasslands
  15: '/assets/chembra_peak.png', // Chembra Peak — heart lake
  16: '/assets/kumara_parvatha.png', // Agasthyarkoodam — bio-reserve peak
  17: '/assets/kudremukh.png', // Tadiyandamol — Kodagu summit
  18: '/assets/kochi.png', // Kochi — Fort Kochi waterfront
  19: '/assets/vishakhapatnam.png', // Vishakhapatnam — city of destiny
  20: '/assets/mangalore.png', // Mangalore — coastal Karnataka
  21: '/assets/mysuru.png', // Mysuru — palace city
};

const ALL_TYPES = ['All', 'Hill Station', 'Beach', 'Heritage', 'Backwater', 'City', 'Trekking'];

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AnimateOnScrollDirective],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class DestinationsComponent {
  searchQuery = '';
  activeFilter = 'All';
  savedDestinations = new Set<number>();

  readonly filters = ALL_TYPES;
  readonly filterEmoji: Record<string, string> = {
    'All': '',
    'Hill Station': '🏔️',
    'Beach': '🏖️',
    'Heritage': '🏛️',
    'Backwater': '🚣',
    'City': '🏙️',
    'Trekking': '🥾',
  };

  get filteredDestinations(): Destination[] {
    return DESTINATIONS.filter(d => {
      const matchSearch =
        !this.searchQuery ||
        d.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        d.summary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        d.type.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchFilter = this.activeFilter === 'All' || d.type === this.activeFilter;
      return matchSearch && matchFilter;
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  toggleSave(id: number, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.savedDestinations.has(id)) {
      this.savedDestinations.delete(id);
    } else {
      this.savedDestinations.add(id);
    }
  }

  isSaved(id: number): boolean {
    return this.savedDestinations.has(id);
  }

  getImage(id: number): string {
    return UNSPLASH_MAP[id] ?? '/assets/varkala1.jpg';
  }

  clearSearch() {
    this.searchQuery = '';
  }
}
