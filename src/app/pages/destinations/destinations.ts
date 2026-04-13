import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Destination, DESTINATIONS } from './destinations-data';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { NotificationService } from '../../services/notification.service';

const UNSPLASH_MAP: Record<number, string> = {
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

const ALL_TYPES = ['All', 'Hill Station', 'Beach', 'Heritage', 'Backwater', 'City', 'Trekking'];

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AnimateOnScrollDirective],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class DestinationsComponent implements OnInit {
  searchQuery = '';
  activeFilter = 'All';
  activeMood: string | null = null;
  savedDestinations = new Set<number>();

  constructor(private notify: NotificationService, private route: ActivatedRoute) {}

  ngOnInit() {
    const moodParam = this.route.snapshot.queryParamMap.get('mood');
    if (moodParam) {
      this.selectMood(moodParam);
    }
  }

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

  readonly moods = [
    { id: 'serene',     icon: '🌊', label: 'Serene Escape',     types: ['Backwater', 'Hill Station'] },
    { id: 'adrenaline', icon: '⛰️', label: 'Adrenaline Rush',   types: ['Trekking'] },
    { id: 'hearts',     icon: '💕', label: 'Hearts Entwined',   types: ['Heritage', 'Beach'] },
    { id: 'soul',       icon: '🕌', label: 'Soul Seeking',      types: ['Heritage'] },
    { id: 'urban',      icon: '🏙️', label: 'Urban Canvas',      types: ['City'] },
    { id: 'tropical',   icon: '🏖️', label: 'Tropical Paradise', types: ['Beach'] },
  ];

  selectMood(id: string) {
    if (this.activeMood === id) {
      this.activeMood = null;
    } else {
      this.activeMood = id;
    }
    // Reset type filter when mood changes — moodTags spans multiple types
    this.activeFilter = 'All';
  }

  get filteredDestinations(): Destination[] {
    return DESTINATIONS.filter(d => {
      const matchSearch =
        !this.searchQuery ||
        d.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        d.summary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        d.type.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchFilter = this.activeFilter === 'All' || d.type === this.activeFilter;
      const matchMood = !this.activeMood || d.moodTags.includes(this.activeMood);
      return matchSearch && matchFilter && matchMood;
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  toggleSave(id: number, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    const dest = DESTINATIONS.find(d => d.id === id);
    const name = dest?.name ?? 'Destination';
    if (this.savedDestinations.has(id)) {
      this.savedDestinations.delete(id);
      this.notify.info(`${name} removed from your saved list.`);
    } else {
      this.savedDestinations.add(id);
      this.notify.success(`${name} saved to your wishlist! ❤️`);
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
