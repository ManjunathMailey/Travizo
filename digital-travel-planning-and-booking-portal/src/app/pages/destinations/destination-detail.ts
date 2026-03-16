import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Destination, DESTINATIONS } from './destinations-data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-destination-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './destination-detail.html',
  styleUrls: ['./destination-detail.css'],
})
export class DestinationDetailComponent {
  destination: Destination | null = null;
  mapUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      const dest = DESTINATIONS.find(d => d.id === id) || null;
      if (dest) {
        this.destination = dest;
        const url = `https://www.google.com/maps?q=${dest.coords}&z=12&output=embed`;
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }
  }
}
