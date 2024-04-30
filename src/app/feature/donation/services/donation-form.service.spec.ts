import { TestBed } from '@angular/core/testing';

import { DonationFormService } from './donation-form.service';
import {Form, FormGroup, Validators} from "@angular/forms";

describe('DonationFormService', () => {
  let service: DonationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('buildForm', () => {
    it('should build form and return', () => {
      const form: FormGroup = service.buildForm();

      expect(form.contains('clothes')).toBeTruthy();
      expect(form.contains('isPickUp')).toBeTruthy();
      expect(form.contains('crisisCountry')).toBeTruthy();
      expect(form.contains('date')).toBeTruthy();
      expect(form.contains('time')).toBeTruthy();
      expect(form.contains('name')).toBeTruthy();
      expect(form.contains('lastName')).toBeTruthy();
      expect(form.contains('street')).toBeTruthy();
      expect(form.contains('postCode')).toBeTruthy();
      expect(form.contains('city')).toBeTruthy();

      expect(form.get('isPickUp')?.validator).toEqual(Validators.required);
      expect(form.get('crisisCountry')?.validator).toEqual(Validators.required);
      expect(form.get('date')?.validator).toEqual(Validators.required);
      expect(form.get('time')?.validator).toEqual(Validators.required);
    });
  })

  describe('buildClothingForm', () => {
    it('should return clothing form', () => {
      const form: FormGroup = service.buildClothingGroup();

      expect(form.contains('type')).toBeTruthy();
      expect(form.contains('quantity')).toBeTruthy();
    });
  })
});
