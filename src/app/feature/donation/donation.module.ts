import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DonateComponent} from "./donate/donate.component";
import {DonationConfirmationComponent} from "./donation-confirmation/donation-confirmation.component";
import {DonationHistoryComponent} from "./donation-history/donation-history.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";


@NgModule({
  declarations: [
    DonateComponent,
    DonationConfirmationComponent,
    DonationHistoryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggle,
    MatFormFieldModule,
    MatSelect,
    MatOption
  ]
})
export class DonationModule { }
