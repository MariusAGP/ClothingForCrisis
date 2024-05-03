import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {DonationService} from "../services/donation.service";
import {catchError, map, Observable, of} from "rxjs";
import {Donation} from "../models/donation";

export const donationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const donationService: DonationService = inject(DonationService);
  const router: Router = inject(Router);

  return donationService.getDonation().pipe(
    map((donation: Donation | null) => {
      if (!!donation) {
        return true; // used to check if donation in store exists. If not do not allow navigation to confirmation page.
      } else {
        router.navigate(['donate']);
        return false;
      }
    }),
    catchError(error => {
      return of(false);
    })
  );
};
