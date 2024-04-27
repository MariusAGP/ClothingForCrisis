import { Component } from '@angular/core';
import {ThemeService} from "../../../shared/theming/theme.service";

@Component({
  selector: 'app-mobile-header-nav',
  templateUrl: './mobile-header-nav.component.html',
  styleUrl: './mobile-header-nav.component.scss'
})
export class MobileHeaderNavComponent {

  constructor(public themeService: ThemeService) {
  }

}
