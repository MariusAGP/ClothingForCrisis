import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MobileHeaderNavComponent} from "./feature/navigation/mobile-header-nav/mobile-header-nav.component";
import {DesktopHeaderNavComponent} from "./feature/navigation/desktop-header-nav/desktop-header-nav.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {DonationModule} from "./feature/donation/donation.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import { ThemeToggleButtonComponent } from './shared/theming/theme-toggle-button/theme-toggle-button.component';
import { FooterComponent } from './feature/navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopHeaderNavComponent,
    MobileHeaderNavComponent,
    ThemeToggleButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatIcon,
    ReactiveFormsModule,
    DonationModule,
    MatFormFieldModule,
    MatIconButton
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
