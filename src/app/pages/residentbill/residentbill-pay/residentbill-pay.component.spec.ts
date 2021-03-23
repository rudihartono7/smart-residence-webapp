import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentbillPayComponent } from './residentbill-pay.component';

describe('ResidentbillPayComponent', () => {
  let component: ResidentbillPayComponent;
  let fixture: ComponentFixture<ResidentbillPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentbillPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentbillPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
