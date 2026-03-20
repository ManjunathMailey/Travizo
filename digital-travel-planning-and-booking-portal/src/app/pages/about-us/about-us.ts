import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink, CommonModule, AnimateOnScrollDirective],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUsComponent {
  stats = [
    { number: '500+', label: 'Trips Planned' },
    { number: '50+', label: 'Destinations' },
    { number: '10,000+', label: 'Happy Travellers' },
    { number: '4.9★', label: 'Average Rating' },
  ];

  values = [
    {
      emoji: '🌿',
      title: 'Sustainable Travel',
      desc: 'We partner with eco-certified properties and offset carbon footprints for every trip. Tourism should enrich destinations, not deplete them.',
    },
    {
      emoji: '🤝',
      title: 'Local Communities',
      desc: 'We work exclusively with local guides, family-run homestays, and village artisans — ensuring your travel spend directly benefits the communities you visit.',
    },
    {
      emoji: '🗺️',
      title: 'Authentic Experiences',
      desc: 'We go beyond tourist traps. From dawn hikes to spice market visits and temple ceremonies, we curate experiences that reveal the true soul of a place.',
    },
  ];

  team = [
    {
      name: 'Priya Nair',
      role: 'Founder & Lead Guide',
      bio: 'Born in Suryanelli, Munnar, Priya has explored every trail in the Western Ghats.',
      img: '/assets/munnar1.jpeg',
    },
    {
      name: 'Arjun Menon',
      role: 'Head of Experiences',
      bio: 'Adventure photographer with 200+ trekking expeditions across South India.',
      img: '/assets/Alleppey1.jpeg',
    },
    {
      name: 'Kavitha Reddy',
      role: 'Travel Curator',
      bio: 'Former historian who transforms heritage sites into living, breathing stories.',
      img: '/assets/Hampi.jpg',
    },
    {
      name: 'Suresh Kumar',
      role: 'Guest Experience Lead',
      bio: 'Hospitality veteran ensuring every touchpoint of your journey is seamless.',
      img: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=300&h=300&fit=crop&q=80',
    },
  ];
}
