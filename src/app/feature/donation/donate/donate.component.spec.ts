import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DonateComponent} from './donate.component';
import {DonationService} from "../services/donation.service";
import {DonationFormService} from "../services/donation-form.service";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {Router} from "@angular/router";

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;
  let donationService: DonationService;
  let donationFormService: DonationFormService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DonateComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateComponent);
    donationService = TestBed.inject(DonationService);
    donationFormService = TestBed.inject(DonationFormService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize form and enable address fields', fakeAsync(() => {
      const formServiceSpy = jest.spyOn(donationFormService, 'buildForm');

      component.ngOnInit();
      component.form.get('isPickUp')?.setValue(true);

      tick();

      expect(component.form.get('street')?.enabled).toBeTruthy();
      expect(component.form.get('postCode')?.enabled).toBeTruthy();
      expect(component.form.get('city')?.enabled).toBeTruthy();
      expect(formServiceSpy).toHaveBeenCalled();
    }));

    it('should initialize form and calc progress', () => {
      component.ngOnInit();
      component.form.get('crisisCountry')?.setValue('Ukraine');
      component.form.get('date')?.setValue('01.01.2024');
      component.form.get('time')?.setValue('12:00');

      expect(component.progress1).toBe(33.33333333333333);
      expect(component.progress2).toBe(100);
    });
  })

  describe('addClothingFormGroup', () => {
    it('should add clothing form group to form array clothes', () => {
      const donationFormServiceSpy = jest.spyOn(donationFormService, 'buildClothingGroup');
      component.ngOnInit();
      component.addClothingFormGroup();

      expect(donationFormServiceSpy).toHaveBeenCalled();
      expect(component.clothesFormArray.length).toBe(2);
    });
  })

  describe('removeClothingFormGroupAtIndex', () => {
    it('should remove group at given index', () => {
      component.ngOnInit();
      component.addClothingFormGroup();
      component.removeClothingFormGroupAtIndex(1);

      expect(component.clothesFormArray.length).toBe(1);
    });
  })

  describe('checkIfClothingTypeAlreadySelected', () => {
    it('should return true', () => {
      component.ngOnInit();
      const clothes = component.clothesFormArray;
      clothes.controls[0].get('type')?.setValue('Shirts');

      const result: boolean = component.checkIfClothingTypeAlreadySelected('Shirts');
      expect(result).toBeTruthy();
    });
  })

  describe('resetForm', () => {
    it('should reset form', () => {
      component.ngOnInit();
      const spy = jest.spyOn(component.form, 'reset');
      component.resetForm();

      expect(spy).toHaveBeenCalled();
    });
  })

  describe('submitForm', () => {
    it('should submit form if valid', () => {
      const serviceSpy = jest.spyOn(donationService, 'setDonation').mockImplementation();
      const routerSpy = jest.spyOn(router, 'navigate').mockImplementation();

      component.ngOnInit();
      component.form.get('crisisCountry')?.setValue('Ukraine');
      component.clothesFormArray.controls[0].get('quantity')?.setValue(22);
      component.clothesFormArray.controls[0].get('type')?.setValue('Shirts');
      component.form.get('date')?.setValue('01.01.2025');
      component.form.get('time')?.setValue('12:00');

      component.submitForm();
      expect(component.form.valid).toBeTruthy();
      expect(serviceSpy).toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalledWith(['/confirmation']);
    });
  })
});
