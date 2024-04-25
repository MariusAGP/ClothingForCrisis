import { Component } from '@angular/core';
import {ThemeService} from "../../../shared/theming/theme.service";

@Component({
  selector: 'app-desktop-header-nav',
  templateUrl: './desktop-header-nav.component.html',
  styleUrl: './desktop-header-nav.component.scss'
})
export class DesktopHeaderNavComponent {

  constructor(private themeService: ThemeService) {}

  public resolveLogo(): string {
    return this.themeService.getThemedLogo();
  }

}
