import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.css'
})
export class ThemeToggleButtonComponent implements OnInit {
  public isDarkMode: boolean;

  constructor(private themeService: ThemeService) { }


  public ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  changeTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}
