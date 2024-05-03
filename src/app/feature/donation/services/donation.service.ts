import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Donation} from "../models/donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationSubject: BehaviorSubject<Donation | null> = new BehaviorSubject<Donation | null>(null); // use behavior subject so that later subscribers like donation confirmation still see current donation
  private $donation: Observable<Donation | null> = this.donationSubject.asObservable();

  constructor() { }

  public setDonation(donation: Donation): void {
    this.donationSubject.next(donation);
  }

  public getDonation(): Observable<Donation | null> {
    return this.$donation;
  }
}
