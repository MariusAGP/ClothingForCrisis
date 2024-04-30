import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {of} from "rxjs";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let breakPointObserver: BreakpointObserver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    breakPointObserver = TestBed.inject(BreakpointObserver);
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ClothingForCrisis'`, () => {
    expect(component.title).toEqual('ClothingForCrisis');
  });

  describe('ngOnInit', () => {
    it('should listen to breakpoints and set isMobile to true', () => {
      const returnValue: BreakpointState = {matches: true} as BreakpointState;
      jest.spyOn(breakPointObserver, 'observe').mockReturnValue(of(returnValue))
      component.ngOnInit();
      expect(component.isMobile).toBeTruthy();
    });

    it('should listen to breakpoints and set isMobile to false', () => {
      const returnValue: BreakpointState = {matches: false} as BreakpointState;
      jest.spyOn(breakPointObserver, 'observe').mockReturnValue(of(returnValue))
      component.ngOnInit();
      expect(component.isMobile).toBeFalsy();
    });
  })
});
