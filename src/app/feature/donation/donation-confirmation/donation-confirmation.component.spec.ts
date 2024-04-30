import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationConfirmationComponent } from './donation-confirmation.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('DonationConfirmationComponent', () => {
  let component: DonationConfirmationComponent;
  let fixture: ComponentFixture<DonationConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationConfirmationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
