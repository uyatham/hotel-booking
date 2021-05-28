import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-check-in-information',
  templateUrl: './check-in-information.component.html',
  styleUrls: ['./check-in-information.component.scss'],
})
export class CheckInInformationComponent implements OnInit {
  checkInForm: FormGroup;
  foodControls: AbstractControl[];
  roomOptions = [
    { key: 'Standard (2x)', value: 2 },
    { key: 'Deluxe (3X)', value: 3 },
    { key: 'Suite (4X)', value: 4 },
  ];
  pickUpOptions = [
    { key: 'Yes, Sure', value: 'Y' },
    { key: 'No, I already rented a car', value: 'N' },
  ];
  foodOptions = ['Breakfast', 'Lunch', 'Dinner'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      numberOfPersons: ['', Validators.required],
      pickUp: [''],
      roomType: ['', Validators.required],
      typesOfFood: this.formBuilder.array([], Validators.required),
    });

    this.setTypesOfFood();
    this.foodControls = (
      this.checkInForm.get('typesOfFood') as FormArray
    ).controls;
  }

  setTypesOfFood(): void {
    const typesOfFoodFormArray = this.checkInForm.get(
      'typesOfFood'
    ) as FormArray;
    this.foodOptions.forEach(() => {
      const formControl = new FormControl(false);
      typesOfFoodFormArray.push(formControl);
    });
  }
}
