import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleButtonComponent } from './theme-toggle-button.component';
import {ThemeService} from "../theme.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ThemeToggleButtonComponent', () => {
  let component: ThemeToggleButtonComponent;
  let fixture: ComponentFixture<ThemeToggleButtonComponent>;
  let themeService: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeToggleButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeToggleButtonComponent);
    themeService = TestBed.inject(ThemeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isDarkMode from service', () => {
      jest.spyOn(themeService, 'isDarkMode').mockReturnValue(true);
      component.ngOnInit();
      expect(component.isDarkMode).toBeTruthy();
    });
  })

  describe('changeTheme', () => {
    it('should change theme in theme service', () => {
      const spy = jest.spyOn(themeService, 'setDarkMode').mockImplementation();
      component.isDarkMode = false;
      component.changeTheme();
      expect(spy).toHaveBeenCalledWith(true);
    });
  })
});
