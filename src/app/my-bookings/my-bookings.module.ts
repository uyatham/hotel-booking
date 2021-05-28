import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MyBookingsComponent } from './my-bookings.component';

const routes: Routes = [
  {
    path: '',
    component: MyBookingsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [MyBookingsComponent],
})
export class MyBookingsModule {}
