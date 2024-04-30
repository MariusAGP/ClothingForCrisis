import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { DonationService } from './donation.service';
import {Donation} from "../models/donation";

describe('DonationService', () => {
  let service: DonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setDonation', () => {
    it('should set donation and return same', fakeAsync(() => {
      service.setDonation({name: 'test-donation'} as Donation);

      let result: Donation | null = null;
      service.getDonation().subscribe((donation: Donation | null) => {
        result = donation;
      })

      tick();

      // @ts-ignore idk why jest is thinking result can only be of type null here. Test works fine.
      expect(result).toEqual({name: 'test-donation'} as Donation)
    }));
  });
});
