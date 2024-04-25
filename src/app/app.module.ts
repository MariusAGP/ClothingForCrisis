import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {ReactiveFormsModule} from "@angular/forms";
import {DonationModule} from "./feature/donation/donation.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {NavigationModule} from "./feature/navigation/navigation.module";

registerLocaleData(localeDe, 'de-DE', localeDeExtra)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DonationModule,
    NavigationModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
