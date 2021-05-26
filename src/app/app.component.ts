import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotel-booking';
  routes = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'My Bookings', path: '/my-bookings', icon: 'dns' },
  ];
  constructor(public mediaObserver: MediaObserver) {}
}
