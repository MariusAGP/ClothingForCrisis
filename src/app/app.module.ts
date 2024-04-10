import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MobileHeaderNavComponent} from "./feature/navigation/mobile-header-nav/mobile-header-nav.component";
import {DesktopHeaderNavComponent} from "./feature/navigation/desktop-header-nav/desktop-header-nav.component";
import {MatToolbar} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    DesktopHeaderNavComponent,
    MobileHeaderNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
