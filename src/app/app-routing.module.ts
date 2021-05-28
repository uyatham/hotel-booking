import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./reservation/reservation.module').then(
        (m) => m.ReservationModule
      ),
  },
  {
    path: 'my-bookings',
    loadChildren: () =>
      import('./my-bookings/my-bookings.module').then(
        (m) => m.MyBookingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
