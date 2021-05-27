import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-person-dialog',
  templateUrl: './add-person-dialog.component.html',
  styleUrls: ['./add-person-dialog.component.scss'],
})
export class AddPersonDialogComponent implements OnInit {
  personForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      age: [''],
      gender: [''],
      address: [''],
      phone: [''],
      email: [''],
    });
  }

  checkInInfo(): void {
    console.log(this.personForm.controls);
  }
}
