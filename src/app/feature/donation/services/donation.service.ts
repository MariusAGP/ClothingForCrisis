import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Donation} from "../models/donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationSubject: Subject<Donation> = new Subject<Donation>();
  private $donation: Observable<Donation> = this.donationSubject.asObservable();

  constructor() { }

  public setDonation(donation: Donation): void {
    console.log(donation);
    this.donationSubject.next(donation);
  }

  public getDonation(): Observable<Donation> {
    return this.$donation;
  }
}
