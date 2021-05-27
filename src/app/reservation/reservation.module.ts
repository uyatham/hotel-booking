import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AddPersonDialogComponent } from './add-person-dialog/add-person-dialog.component';
import { CheckInInformationComponent } from './check-in-information/check-in-information.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './reservation.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ReservationComponent,
    CheckInInformationComponent,
    PersonalInfoComponent,
    PaymentComponent,
    AddPersonDialogComponent,
  ],
})
export class ReservationModule {}
