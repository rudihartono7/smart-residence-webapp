import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentfundListComponent } from './residentfund-list.component';

describe('ResidentfundListComponent', () => {
  let component: ResidentfundListComponent;
  let fixture: ComponentFixture<ResidentfundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentfundListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentfundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
