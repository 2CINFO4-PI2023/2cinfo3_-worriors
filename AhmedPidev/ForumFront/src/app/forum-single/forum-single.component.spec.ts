import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSingleComponent } from './forum-single.component';

describe('ForumSingleComponent', () => {
  let component: ForumSingleComponent;
  let fixture: ComponentFixture<ForumSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
