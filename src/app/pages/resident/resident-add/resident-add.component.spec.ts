import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentAddComponent } from './resident-add.component';

describe('ResidentAddComponent', () => {
  let component: ResidentAddComponent;
  let fixture: ComponentFixture<ResidentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
