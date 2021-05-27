import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-in-information',
  templateUrl: './check-in-information.component.html',
  styleUrls: ['./check-in-information.component.scss'],
})
export class CheckInInformationComponent implements OnInit {
  checkInForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      checkIn: [''],
      checkOut: [''],
      roomType: [''],
      numberOfPersons: [1],
      typesOfFood: [null],
      pickUp: [null],
    });
  }
}
