import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Destination, DESTINATIONS } from './destinations-data';

@Component({
  standalone: true,
  selector: 'app-destinations',
  imports: [CommonModule, RouterLink],
  templateUrl: './destinations.html',
  styleUrl: './destinations.page.css',
})
export class DestinationsComponent {
  searchTerm: string = '';
  filter: string = 'all';
  mockDestinations: Destination[] = DESTINATIONS;

  constructor(private router: Router) {
    // data comes from the shared DESTINATIONS constant
  }



  get filteredDestinations() {
    const term = this.searchTerm.trim().toLowerCase();
    return this.mockDestinations.filter(d => {
      const matchesFilter = this.filter === 'all' || d.type.toLowerCase() === this.filter.toLowerCase();
      const matchesSearch = !term || d.name.toLowerCase().includes(term) || d.summary.toLowerCase().includes(term);
      return matchesFilter && matchesSearch;
    });
  }

  viewDetails(dest: Destination) {
    // navigate to detail route instead of modal
    this.router.navigate(['/destinations', dest.id]);
  }


}
