import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInInformationComponent } from './check-in-information.component';

describe('CheckInInformationComponent', () => {
  let component: CheckInInformationComponent;
  let fixture: ComponentFixture<CheckInInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
