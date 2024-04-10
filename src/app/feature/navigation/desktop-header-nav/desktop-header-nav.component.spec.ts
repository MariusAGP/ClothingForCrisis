import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHeaderNavComponent } from './desktop-header-nav.component';

describe('DesktopHeaderNavComponent', () => {
  let component: DesktopHeaderNavComponent;
  let fixture: ComponentFixture<DesktopHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopHeaderNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
