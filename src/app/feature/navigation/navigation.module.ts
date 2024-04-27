import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DesktopHeaderNavComponent} from "./desktop-header-nav/desktop-header-nav.component";
import {MobileHeaderNavComponent} from "./mobile-header-nav/mobile-header-nav.component";
import {ThemeToggleButtonComponent} from "../../shared/theming/theme-toggle-button/theme-toggle-button.component";
import {FooterComponent} from "./footer/footer.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    DesktopHeaderNavComponent,
    MobileHeaderNavComponent,
    ThemeToggleButtonComponent,
    FooterComponent,
  ],
  exports: [
    FooterComponent,
    MobileHeaderNavComponent,
    DesktopHeaderNavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton
  ]
})
export class NavigationModule { }
