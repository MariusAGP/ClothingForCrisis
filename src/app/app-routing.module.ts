import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DonateComponent} from "./feature/donation/donate/donate.component";
import {DonationConfirmationComponent} from "./feature/donation/donation-confirmation/donation-confirmation.component";
import {DonationHistoryComponent} from "./feature/donation/donation-history/donation-history.component";

const routes: Routes = [
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'confirmation',
    component: DonationConfirmationComponent,
  },
  {
    path: 'donation-history',
    component: DonationHistoryComponent
  },
  {
    path: '**',
    redirectTo: '/donate',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/donate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
