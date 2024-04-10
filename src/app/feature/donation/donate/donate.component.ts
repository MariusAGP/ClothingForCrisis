import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {DonationFormService} from "../services/donation-form.service";
import {startWith, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public crisisCountries: string[] = ['Palestine', 'Ukraine', 'Syria', 'Haiti', 'Somalia', 'Yemen'];
  public clothingTypes: string[] = ['Shirts', 'Pants', 'Jackets', 'Shoes', 'Accessories'];
  private $destroyed: Subject<void> = new Subject<void>();

  constructor(private donationFormService: DonationFormService) {
  }

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

  private togglePickUpControls(): void {
    this.form.get('isPickUp')?.valueChanges.pipe(
      takeUntil(this.$destroyed),
      startWith(this.form.get('isPickUp')?.value)
    ).subscribe((value: boolean) => {
      if (value) {
        this.form.get('street')?.enable();
        this.form.get('country')?.enable();
        this.form.get('postCode')?.enable();
        this.form.get('city')?.enable();
        this.form.get('date')?.enable();
      } else {
        this.form.get('street')?.disable();
        this.form.get('country')?.disable();
        this.form.get('postCode')?.disable();
        this.form.get('city')?.disable();
        this.form.get('date')?.disable();
      }
    })
  }

  protected readonly FormGroup = FormGroup;
}
