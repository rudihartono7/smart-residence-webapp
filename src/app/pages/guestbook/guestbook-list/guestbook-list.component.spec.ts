import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookListComponent } from './guestbook-list.component';

describe('GuestbookListComponent', () => {
  let component: GuestbookListComponent;
  let fixture: ComponentFixture<GuestbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestbookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
