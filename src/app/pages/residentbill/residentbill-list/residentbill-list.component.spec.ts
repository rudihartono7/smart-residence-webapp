import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentbillListComponent } from './residentbill-list.component';

describe('ResidentbillListComponent', () => {
  let component: ResidentbillListComponent;
  let fixture: ComponentFixture<ResidentbillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentbillListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentbillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
