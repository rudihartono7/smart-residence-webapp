import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResidentBillComponent } from './my-resident-bill.component';

describe('MyResidentBillComponent', () => {
  let component: MyResidentBillComponent;
  let fixture: ComponentFixture<MyResidentBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyResidentBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResidentBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
