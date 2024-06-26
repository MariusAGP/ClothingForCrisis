import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup, Validators} from "@angular/forms";
import {DonationFormService} from "../services/donation-form.service";
import {startWith, Subject, takeUntil} from "rxjs";
import {DonationService} from "../services/donation.service";
import {Donation} from "../models/donation";
import {Router} from "@angular/router";
import {Clothing} from "../models/clothing";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss'
})
export class DonateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public crisisCountries: string[] = ['Palestina', 'Ukraine', 'Syrien', 'Haiti', 'Somalia', 'Yemen'];
  public clothingTypes: string[] = ['Shirts', 'Hosen', 'Jacken', 'Schuhe', 'Accessoires'];
  public timeSlots: string[] = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  public progress1: number;
  public progress2: number;
  private $destroyed: Subject<void> = new Subject<void>();

  constructor(
    private donationFormService: DonationFormService,
    private donationService: DonationService,
    private router: Router
  ) {}

  get clothesFormArray(): FormArray {
    return this.form.get('clothes') as FormArray<FormGroup>;
  }

  ngOnInit(): void {
    this.form = this.donationFormService.buildForm();
    this.togglePickUpControls();
    this.calcFormProgress();
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

  public addClothingFormGroup(): void {
    this.clothesFormArray.push(this.donationFormService.buildClothingGroup());
  }

  public removeClothingFormGroupAtIndex(index: number): void {
    this.clothesFormArray.removeAt(index);
  }

  public checkIfClothingTypeAlreadySelected(clothingType: string): boolean {
    return !!this.clothesFormArray.controls.find((control: AbstractControl): boolean => control.get('type')?.value === clothingType); // used to prevent duplicate type
  }

  public resetForm(): void {
    this.form.reset();
  }

  public submitForm(): void {
    this.form.markAllAsTouched(); // check for any not filled fields and mark them as touched to display red error outline
    if (this.form.valid) {
      const value: Donation = this.form.getRawValue();
      this.donationService.setDonation(value);
      this.router.navigate(['/confirmation']);
    }
  }

  private togglePickUpControls(): void {
    this.form.get('isPickUp')?.valueChanges.pipe(
      takeUntil(this.$destroyed),
      startWith(this.form.get('isPickUp')?.value) // to start with initial value which is false
    ).subscribe((isPickUp: boolean) => {
      if (isPickUp) {
        this.enableControlAndMakeRequired('name');
        this.enableControlAndMakeRequired('lastName');
        this.enableControlAndMakeRequired('street');
        this.enableControlAndMakeRequired('postCode');
        this.enableControlAndMakeRequired('city');
      } else {
        this.disableControlAndMakeOptional('name', false);
        this.disableControlAndMakeOptional('lastName', false);
        this.disableControlAndMakeOptional('street');
        this.disableControlAndMakeOptional('postCode');
        this.disableControlAndMakeOptional('city');
      }
    })
  }

  private enableControlAndMakeRequired(formControlName: string): void {
    this.form.get(formControlName)?.enable();
    this.form.get(formControlName)?.addValidators([Validators.required]);
    this.form.get(formControlName)?.updateValueAndValidity();
  }

  private disableControlAndMakeOptional(formControlName: string, setDisabled: boolean = true): void {
    setDisabled ? this.form.get(formControlName)?.disable() : null; // this line is here to only disable form controls that really should be disabled
    this.form.get(formControlName)?.removeValidators([Validators.required]);
    this.form.get(formControlName)?.updateValueAndValidity(); // required to let form control know validators changed
  }

  private calcFormProgress(): void {
    this.form.valueChanges.pipe(takeUntil(this.$destroyed)).subscribe((donation: Donation): void => {
      this.calcProgress1(donation);
      this.calcProgress2(donation);
    });
  };

  private calcProgress1(donation: Donation): void {
    const filledCountry: number = !!donation.crisisCountry ? 1 : 0;
    let filledFieldsClothes: number = 0;
    donation.clothes.forEach((clothing: Clothing): void => {
      if (!!clothing.type && !!clothing.quantity) {
        filledFieldsClothes += 2; // Count each field
      } else if (!!clothing.type || !!clothing.quantity) {
        filledFieldsClothes += 1; // Count one field
      }
    });

    const totalFilledFields: number = filledCountry + filledFieldsClothes;

    this.progress1 = (totalFilledFields / ((donation.clothes.length * 2) + 1)) * 100; // percentage of filled fields
  }

  private calcProgress2(donation: Donation): void {
    const filledName: number = !!donation.name ? 1 : 0;
    const filledLastName: number = !!donation.lastName ? 1 : 0;
    const filledStreet: number = !!donation.street ? 1 : 0;
    const filledCity: number = !!donation.city ? 1 : 0;
    const filledPostCode: number = !!donation.postCode ? 1 : 0;
    const filledDate: number = !!donation.date ? 1 : 0;
    const filledTime: number = !!donation.time ? 1 : 0;
    let totalFilledFields: number;

    if (donation.isPickUp) {
      totalFilledFields = filledName + filledLastName + filledStreet + filledCity + filledPostCode + filledDate + filledTime;
    } else {
      totalFilledFields = filledDate + filledTime;
    }
    const totalFieldsToFill: number = donation.isPickUp ? 7 : 2;

    this.progress2 = (totalFilledFields / totalFieldsToFill) * 100; // percentage of filled fields
  }
}
