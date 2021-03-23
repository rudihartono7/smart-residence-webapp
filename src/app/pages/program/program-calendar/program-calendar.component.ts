import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageInfoService } from 'src/app/core/services/page-info-service.service';

const PAGE_TITLE = 'Program';
const PAGE_DESC = 'View all your program';

@Component({
  selector: 'app-program-calendar',
  templateUrl: './program-calendar.component.html',
  styleUrls: ['./program-calendar.component.css']
})
export class ProgramCalendarComponent implements OnInit {

  constructor(private pageInfoService: PageInfoService) { }

  ngOnInit(): void {
    this.pageInfoService.sendPageInfo(PAGE_TITLE, PAGE_DESC);
  }
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    console.log('on month changed');
    return null;
  }
  selectChange($event:any){
    console.log($event);
  }

}
