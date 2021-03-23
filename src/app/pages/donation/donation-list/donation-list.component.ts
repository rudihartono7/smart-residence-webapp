import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/core/services/page-info-service.service';

const PAGE_TITLE = 'Donation';
const PAGE_DESC = 'View all donation for your app';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  constructor(private pageInfoService: PageInfoService) {
   }

  ngOnInit(): void {
    this.pageInfoService.sendPageInfo(PAGE_TITLE, PAGE_DESC);
  }

}
