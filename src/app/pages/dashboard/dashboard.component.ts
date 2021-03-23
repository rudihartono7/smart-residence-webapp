import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageInfoService } from 'src/app/core/services/page-info-service.service';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESC = 'View your app data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(private pageInfoService: PageInfoService) {
    
   }
  ngAfterViewInit(): void {
    //do nothing
  }

  ngOnInit(): void {
    this.pageInfoService.sendPageInfo(PAGE_TITLE, PAGE_DESC);
  }

}
