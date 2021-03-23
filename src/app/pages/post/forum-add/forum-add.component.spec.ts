import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAddComponent } from './forum-add.component';

describe('ForumAddComponent', () => {
  let component: ForumAddComponent;
  let fixture: ComponentFixture<ForumAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
