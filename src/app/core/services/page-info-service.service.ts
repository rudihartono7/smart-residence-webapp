import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PageTitleModel } from '../models/page-title-model';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  private pagetInfoSubject = new Subject<PageTitleModel>();

    sendPageInfo(title: string, desc: string) {
      const pageInfo = new PageTitleModel();
      pageInfo.title = title;
      pageInfo.desc = desc;
        this.pagetInfoSubject.next(pageInfo);
    }

    clearPageInfo() {
        this.pagetInfoSubject.next();
    }

    getPagetInfo(): Observable<any> {
        return this.pagetInfoSubject.asObservable();
    }
}
