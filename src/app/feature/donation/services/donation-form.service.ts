import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DonationFormService {

  constructor(private formBuilder: FormBuilder) { }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      clothes: this.formBuilder.array([this.buildClothingGroup()], [Validators.maxLength(5)]), // number of clothing types
      isPickUp: [false, Validators.required],
      crisisCountry: ['', Validators.required],
      date: [''],
      time: [''],
      name: [''],
      lastName: [''],
      street: [''],
      postCode: ['', Validators.pattern('^2{2}\\d{3}$')],
      city: [''],
      country: ['Germany']
    })
  }

  public buildClothingGroup(): FormGroup {
    return this.formBuilder.group({
      type: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }
}
