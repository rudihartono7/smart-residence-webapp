import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { PageInfoService } from './core/services/page-info-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isCollapsed = false;
  
  pageTitle: string = '[PAGE_TITLE]';
  pageDesc: string = '[PAGE_DESC]';
  pageInfoSubscription: Subscription;
  constructor(private pagetInfoService: PageInfoService){
    this.pageInfoSubscription = this.pagetInfoService.getPagetInfo().subscribe(msg => {
      this.pageTitle = msg.title;
      this.pageDesc = msg.desc;
    });
  }
  ngOnDestroy(): void {
    this.pageInfoSubscription.unsubscribe();
  }
}
