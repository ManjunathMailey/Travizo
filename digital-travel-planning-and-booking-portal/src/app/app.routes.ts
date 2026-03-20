import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { DestinationsComponent } from './pages/destinations/destinations';
import { DestinationDetailComponent } from './pages/destinations/destination-detail';
import { BookingComponent } from './pages/booking/booking';
import { ContactComponent } from './pages/contact/contact';
import { AboutUsComponent } from './pages/about-us/about-us';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destinations/:id', component: DestinationDetailComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', redirectTo: '' },
];
