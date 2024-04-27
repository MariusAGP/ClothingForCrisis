import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DonateComponent} from "./feature/donation/donate/donate.component";
import {DonationConfirmationComponent} from "./feature/donation/donation-confirmation/donation-confirmation.component";
import {LegalNoticeComponent} from "./feature/navigation/footer/legal-notice/legal-notice.component";
import {DataProtectionComponent} from "./feature/navigation/footer/data-protection/data-protection.component";

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
    path: 'legal-notice',
    component: LegalNoticeComponent
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent
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
