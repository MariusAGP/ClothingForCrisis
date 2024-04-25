import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Donation} from "../models/donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationSubject: BehaviorSubject<Donation | null> = new BehaviorSubject<Donation | null>(null);
  private $donation: Observable<Donation | null> = this.donationSubject.asObservable();

  constructor() { }

  public setDonation(donation: Donation): void {
    console.log(donation);
    this.donationSubject.next(donation);
  }

  public getDonation(): Observable<Donation | null> {
    return this.$donation;
  }
}
