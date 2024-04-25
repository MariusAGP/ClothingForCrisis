import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup, Validators} from "@angular/forms";
import {DonationFormService} from "../services/donation-form.service";
import {startWith, Subject, takeUntil} from "rxjs";
import {DonationService} from "../services/donation.service";
import {Donation} from "../models/donation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss'
})
export class DonateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public crisisCountries: string[] = ['Palestine', 'Ukraine', 'Syria', 'Haiti', 'Somalia', 'Yemen'];
  public clothingTypes: string[] = ['Shirts', 'Pants', 'Jackets', 'Shoes', 'Accessories'];
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
    return !!this.clothesFormArray.controls.find((control: AbstractControl): boolean => control.get('type')?.value === clothingType);
  }

  public resetForm(): void {
    this.form.reset();
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const value: Donation = this.form.getRawValue();
      this.donationService.setDonation(value);
      this.router.navigate(['/confirmation']);
    }
  }

  private togglePickUpControls(): void {
    this.form.get('isPickUp')?.valueChanges.pipe(
      takeUntil(this.$destroyed),
      startWith(this.form.get('isPickUp')?.value)
    ).subscribe((value: boolean) => {
      if (value) {
        this.toggleRequiredNameControls(value);
        this.enableControlAndMakeRequired('street');
        this.enableControlAndMakeRequired('country');
        this.enableControlAndMakeRequired('postCode');
        this.enableControlAndMakeRequired('city');
        this.enableControlAndMakeRequired('date');
      } else {
        this.toggleRequiredNameControls(value);
        this.disableControlAndMakeOptional('street');
        this.disableControlAndMakeOptional('country');
        this.disableControlAndMakeOptional('postCode');
        this.disableControlAndMakeOptional('city');
        this.disableControlAndMakeOptional('date');
      }
    })
  }

  private toggleRequiredNameControls(required: boolean): void {
    if (required) {
      this.form.get('name')?.setValidators([Validators.required]);
      this.form.get('lastName')?.setValidators([Validators.required]);
      this.form.get('name')?.updateValueAndValidity();
      this.form.get('lastName')?.updateValueAndValidity();
    } else {
      this.form.get('name')?.setValidators(null);
      this.form.get('lastName')?.setValidators(null);
      this.form.get('name')?.updateValueAndValidity();
      this.form.get('lastName')?.updateValueAndValidity();
    }
  }

  private enableControlAndMakeRequired(formControlName: string): void {
    this.form.get(formControlName)?.enable();
    this.form.get(formControlName)?.addValidators([Validators.required]);
    this.form.get(formControlName)?.updateValueAndValidity();
  }

  private disableControlAndMakeOptional(formControlName: string): void {
    this.form.get(formControlName)?.disable();
    this.form.get(formControlName)?.removeValidators([Validators.required]);
    this.form.get(formControlName)?.updateValueAndValidity();
  }
}
