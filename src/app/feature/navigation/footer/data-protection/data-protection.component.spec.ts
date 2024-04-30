import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtectionComponent } from './data-protection.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('DataProtectionComponent', () => {
  let component: DataProtectionComponent;
  let fixture: ComponentFixture<DataProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataProtectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
