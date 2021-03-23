import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationAddComponent } from './donation/donation-add/donation-add.component';
import { DonationListComponent } from './donation/donation-list/donation-list.component';
import { GuestbookListComponent } from './guestbook/guestbook-list/guestbook-list.component';
import { GuestbookDetailComponent } from './guestbook/guestbook-detail/guestbook-detail.component';
import { HouseListComponent } from './house/house-list/house-list.component';
import { HouseAddComponent } from './house/house-add/house-add.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { AnnouncementComponent } from './post/announcement/announcement.component';
import { ReportComponent } from './post/report/report.component';
import { ForumComponent } from './post/forum/forum.component';
import { ForumAddComponent } from './post/forum-add/forum-add.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { ProgramCalendarComponent } from './program/program-calendar/program-calendar.component';
import { ProgramAddComponent } from './program/program-add/program-add.component';
import { ResidenceInfoComponent } from './residence/residence-info/residence-info.component';
import { ResidentAddComponent } from './resident/resident-add/resident-add.component';
import { ResidentListComponent } from './resident/resident-list/resident-list.component';
import { ResidentDetailComponent } from './resident/resident-detail/resident-detail.component';
import { ProductListComponent } from './resident/product-list/product-list.component';
import { ProductAddComponent } from './resident/product-add/product-add.component';
import { ResidentbillPayComponent } from './residentbill/residentbill-pay/residentbill-pay.component';
import { ResidentFamilyAddComponent } from './resident/resident-family-add/resident-family-add.component';
import { ResidentbillListComponent } from './residentbill/residentbill-list/residentbill-list.component';
import { ResidentbillDetailComponent } from './residentbill/residentbill-detail/residentbill-detail.component';
import { ResidentbillReportComponent } from './residentbill/residentbill-report/residentbill-report.component';
import { ResidentfundListComponent } from './residentfund/residentfund-list/residentfund-list.component';
import { ResidentfundDetailComponent } from './residentfund/residentfund-detail/residentfund-detail.component';
import { TransactionListComponent } from './residentfund/transaction-list/transaction-list.component';
import { TransactionAddComponent } from './residentfund/transaction-add/transaction-add.component';
import { ResidentfundAddComponent } from './residentfund/residentfund-add/residentfund-add.component';
import { ResidentDashboardComponent } from './resident/resident-dashboard/resident-dashboard.component';
import { MyResidentBillComponent } from './resident/my-resident-bill/my-resident-bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'resident-dashboard-info', component: ResidentDashboardComponent},
  { path: 'donation-list', component: DonationListComponent},
  { path: 'donation', component: DonationAddComponent},
  { path: 'guestbook-list', component: GuestbookListComponent},
  { path: 'guestbook-detail', component: GuestbookDetailComponent},
  { path: 'house-list', component: HouseListComponent},
  { path: 'house', component: HouseAddComponent},
  { path: 'house-detail', component: HouseDetailComponent},
  { path: 'announcement', component: AnnouncementComponent},
  { path: 'report', component: ReportComponent},
  { path: 'forum-list', component: ForumComponent},
  { path: 'forum', component: ForumAddComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'post', component: PostAddComponent},
  { path: 'program-list', component: ProgramListComponent},
  { path: 'program-calendar', component: ProgramCalendarComponent},
  { path: 'program', component: ProgramAddComponent},
  { path: 'residence-info', component: ResidenceInfoComponent},
  { path: 'residence', component: ResidentAddComponent},
  { path: 'resident-list', component: ResidentListComponent},
  { path: 'resident', component: ResidentAddComponent},
  { path: 'resident-detail', component: ResidentDetailComponent},
  { path: 'resident-product-list', component: ProductListComponent},
  { path: 'resident-product', component: ProductAddComponent},
  { path: 'resident-family', component: ResidentFamilyAddComponent},
  { path: 'my-resident-bill', component: MyResidentBillComponent},
  { path: 'resident-bill-list', component: ResidentbillListComponent},
  { path: 'resident-bill-detail', component: ResidentbillDetailComponent},
  { path: 'resident-bill-pay', component: ResidentbillPayComponent},
  { path: 'resident-bill-report', component: ResidentbillReportComponent},
  { path: 'resident-fund-info', component: ResidentfundListComponent},
  { path: 'resident-fund-add', component: ResidentfundAddComponent},
  { path: 'resident-fund-detail', component: ResidentfundDetailComponent},
  { path: 'resident-fund-transaction-list', component: TransactionListComponent},
  { path: 'resident-fund-transaction', component: TransactionAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
