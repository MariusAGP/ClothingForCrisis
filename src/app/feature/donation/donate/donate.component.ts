import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DonationFormService} from "../services/donation-form.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {
  public form: FormGroup;
  public crisisCountries: string[] = ['Palestine', 'Ukraine', 'Syria', 'Haiti', 'Somalia', 'Yemen'];

  constructor(private donationFormService: DonationFormService) {
  }

  ngOnInit(): void {
    this.form = this.donationFormService.buildForm();
  }

}
