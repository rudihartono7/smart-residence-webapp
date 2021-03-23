import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentFamilyAddComponent } from './resident-family-add.component';

describe('ResidentFamilyAddComponent', () => {
  let component: ResidentFamilyAddComponent;
  let fixture: ComponentFixture<ResidentFamilyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentFamilyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentFamilyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
