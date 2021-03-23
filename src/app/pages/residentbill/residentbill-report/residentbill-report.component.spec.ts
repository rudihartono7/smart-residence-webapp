import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentbillReportComponent } from './residentbill-report.component';

describe('ResidentbillReportComponent', () => {
  let component: ResidentbillReportComponent;
  let fixture: ComponentFixture<ResidentbillReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentbillReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentbillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
