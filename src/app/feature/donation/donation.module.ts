import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DonateComponent} from "./donate/donate.component";
import {DonationConfirmationComponent} from "./donation-confirmation/donation-confirmation.component";
import {DonationHistoryComponent} from "./donation-history/donation-history.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatDivider} from "@angular/material/divider";
import {MatProgressBar} from "@angular/material/progress-bar";


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
        MatOption,
        MatRadioGroup,
        MatRadioButton,
        MatInput,
        MatIcon,
        MatIconButton,
        MatDatepickerToggle,
        MatDatepicker,
        MatDatepickerInput,
        MatDivider,
        MatProgressBar,
    ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class DonationModule { }
