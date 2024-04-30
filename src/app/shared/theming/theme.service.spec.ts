import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isDarkMode', () => {
    it('should return value of darkMode', () => {
      service.setDarkMode(true);
      const result: boolean = service.isDarkMode();
      expect(result).toBeTruthy();
    });
  })

  describe('getThemedLogo', () => {
    it('should return logo dark', () => {
      service.setDarkMode(true);
      const result: string = service.getThemedLogo();
      expect(result).toEqual('assets/images/logo_big_dark.png');
    });

    it('should return logo light', () => {
      service.setDarkMode(false);
      const result: string = service.getThemedLogo();
      expect(result).toEqual('assets/images/logo_big_light.png')
    });
  })
});
