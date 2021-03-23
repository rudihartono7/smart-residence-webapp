import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationAddComponent } from './donation-add.component';

describe('DonationAddComponent', () => {
  let component: DonationAddComponent;
  let fixture: ComponentFixture<DonationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
