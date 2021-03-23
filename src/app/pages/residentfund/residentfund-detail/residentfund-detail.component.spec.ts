import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentfundDetailComponent } from './residentfund-detail.component';

describe('ResidentfundDetailComponent', () => {
  let component: ResidentfundDetailComponent;
  let fixture: ComponentFixture<ResidentfundDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentfundDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentfundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
