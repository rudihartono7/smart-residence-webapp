import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentfundAddComponent } from './residentfund-add.component';

describe('ResidentfundAddComponent', () => {
  let component: ResidentfundAddComponent;
  let fixture: ComponentFixture<ResidentfundAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentfundAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentfundAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
