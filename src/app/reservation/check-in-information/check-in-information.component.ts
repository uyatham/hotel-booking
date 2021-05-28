import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { checkBoxValidator } from '../utils/validation.util';

@Component({
  selector: 'app-check-in-information',
  templateUrl: './check-in-information.component.html',
  styleUrls: ['./check-in-information.component.scss'],
})
export class CheckInInformationComponent implements OnInit {
  checkInForm: FormGroup;
  foodControls: AbstractControl[];
  selectedFoodOptions = [];
  checkInDateConfig = {
    min: new Date(),
  };
  checkOutDateConfig = {
    min: new Date(),
  };

  personsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  @Output() changeFood = new EventEmitter<string[]>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      numberOfPersons: ['', Validators.required],
      pickUp: ['', Validators.required],
      roomType: ['', Validators.required],
      typesOfFood: this.formBuilder.array(
        [],
        [Validators.required, checkBoxValidator()]
      ),
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

  findIndexOfFoodOptions(item): number {
    return this.selectedFoodOptions.findIndex((food) => food === item);
  }

  onChange(value): void {
    const index = this.findIndexOfFoodOptions(value);
    if (index !== -1) {
      this.selectedFoodOptions.splice(index, 1);
    } else {
      this.selectedFoodOptions.push(value);
    }
    this.changeFood.emit(this.selectedFoodOptions);
  }

  checkInDateChange(): void {
    this.checkOutDateConfig.min = this.checkInForm.value.checkIn;
    this.checkInForm.patchValue({
      checkOut: '',
    });
  }
}
