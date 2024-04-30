import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { donationGuard } from './donation.guard';

describe('donationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => donationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
