import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeaderNavComponent } from './mobile-header-nav.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('MobileHeaderNavComponent', () => {
  let component: MobileHeaderNavComponent;
  let fixture: ComponentFixture<MobileHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileHeaderNavComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
