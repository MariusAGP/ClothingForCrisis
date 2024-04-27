import { Component } from '@angular/core';
import {DonationService} from "../services/donation.service";

@Component({
  selector: 'app-donation-confirmation',
  templateUrl: './donation-confirmation.component.html',
  styleUrl: './donation-confirmation.component.css'
})
export class DonationConfirmationComponent {

  constructor(public donationService: DonationService) {}

}
