import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentbillDetailComponent } from './residentbill-detail.component';

describe('ResidentbillDetailComponent', () => {
  let component: ResidentbillDetailComponent;
  let fixture: ComponentFixture<ResidentbillDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentbillDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentbillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
