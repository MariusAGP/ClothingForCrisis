import { TestBed } from '@angular/core/testing';

import { DonationFormService } from './donation-form.service';

describe('DonationFormService', () => {
  let service: DonationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
