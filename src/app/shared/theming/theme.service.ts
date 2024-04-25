import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;

  isDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  getThemedLogo(): string {
    if (this.isDarkMode()) {
      return 'assets/images/logo_big_dark.png'
    } else {
      return 'assets/images/logo_big_light.png'
    }
  }
}
