import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-booking',
  imports: [CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class BookingComponent {
  destination: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(map => {
      this.destination = map.get('destination');
    });
  }
}
