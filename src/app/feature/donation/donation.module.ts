import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonateComponent} from "./donate/donate.component";
import {DonationConfirmationComponent} from "./donation-confirmation/donation-confirmation.component";
import {DonationHistoryComponent} from "./donation-history/donation-history.component";



@NgModule({
  declarations: [
    DonateComponent,
    DonationConfirmationComponent,
    DonationHistoryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DonationModule { }
