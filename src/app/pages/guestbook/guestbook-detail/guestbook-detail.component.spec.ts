import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookDetailComponent } from './guestbook-detail.component';

describe('GuestbookDetailComponent', () => {
  let component: GuestbookDetailComponent;
  let fixture: ComponentFixture<GuestbookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestbookDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
