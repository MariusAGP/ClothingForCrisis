import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DonationFormService {

  constructor(private formBuilder: FormBuilder) { }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      clothes: this.formBuilder.array([this.buildClothingGroup()]),
      isPickUp: [false],
      crisisCountry: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
  }

  private buildClothingGroup(): FormGroup {
    return this.formBuilder.group({
      type: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      size: ['', Validators.required],
      condition: ['', Validators.required],
    });
  }
}
