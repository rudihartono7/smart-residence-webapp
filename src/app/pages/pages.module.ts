import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//antd angular module
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule  } from 'ng-zorro-antd/badge';

//smartresidence module
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HouseListComponent } from './house/house-list/house-list.component';
import { HouseAddComponent } from './house/house-add/house-add.component';
import { ResidentListComponent } from './resident/resident-list/resident-list.component';
import { ResidentAddComponent } from './resident/resident-add/resident-add.component';
import { ResidentbillListComponent } from './residentbill/residentbill-list/residentbill-list.component';
import { ResidentbillReportComponent } from './residentbill/residentbill-report/residentbill-report.component';
import { ResidentbillPayComponent } from './residentbill/residentbill-pay/residentbill-pay.component';
import { ResidentbillDetailComponent } from './residentbill/residentbill-detail/residentbill-detail.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AnnouncementComponent } from './post/announcement/announcement.component';
import { ReportComponent } from './post/report/report.component';
import { ForumComponent } from './post/forum/forum.component';
import { ForumAddComponent } from './post/forum-add/forum-add.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { DonationListComponent } from './donation/donation-list/donation-list.component';
import { DonationAddComponent } from './donation/donation-add/donation-add.component';
import { ResidentfundDetailComponent } from './residentfund/residentfund-detail/residentfund-detail.component';
import { ResidentfundListComponent } from './residentfund/residentfund-list/residentfund-list.component';
import { TransactionListComponent } from './residentfund/transaction-list/transaction-list.component';
import { TransactionAddComponent } from './residentfund/transaction-add/transaction-add.component';
import { ResidentDetailComponent } from './resident/resident-detail/resident-detail.component';
import { ResidentFamilyAddComponent } from './resident/resident-family-add/resident-family-add.component';
import { GuestbookListComponent } from './guestbook/guestbook-list/guestbook-list.component';
import { GuestbookDetailComponent } from './guestbook/guestbook-detail/guestbook-detail.component';
import { ProductListComponent } from './resident/product-list/product-list.component';
import { ProductAddComponent } from './resident/product-add/product-add.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { ProgramAddComponent } from './program/program-add/program-add.component';
import { ProgramCalendarComponent } from './program/program-calendar/program-calendar.component';
import { PublicationComponent } from './resident/publication/publication.component';
import { ResidenceInfoComponent } from './residence/residence-info/residence-info.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { ResidentfundAddComponent } from './residentfund/residentfund-add/residentfund-add.component';
import { ResidentDashboardComponent } from './resident/resident-dashboard/resident-dashboard.component';
import { MyResidentBillComponent } from './resident/my-resident-bill/my-resident-bill.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    HouseListComponent, 
    HouseAddComponent, 
    ResidentListComponent, 
    ResidentAddComponent, 
    ResidentbillListComponent, 
    ResidentbillReportComponent, 
    ResidentbillPayComponent, 
    ResidentbillDetailComponent, 
    PostListComponent, 
    AnnouncementComponent, 
    ReportComponent, 
    ForumComponent, 
    ForumAddComponent, 
    PostAddComponent, 
    DonationListComponent, 
    DonationAddComponent, 
    ResidentfundDetailComponent, 
    ResidentfundListComponent, 
    TransactionListComponent, 
    TransactionAddComponent, 
    ResidentDetailComponent, 
    ResidentFamilyAddComponent, 
    GuestbookListComponent, 
    GuestbookDetailComponent, 
    ProductListComponent, 
    ProductAddComponent, 
    ProgramListComponent, 
    ProgramAddComponent, 
    ProgramCalendarComponent, 
    PublicationComponent, 
    ResidenceInfoComponent, 
    HouseDetailComponent, 
    ResidentfundAddComponent, 
    ResidentDashboardComponent, 
    MyResidentBillComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzFormModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzBadgeModule
  ]
})
export class PagesModule { }
