import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleQuestionComponent } from './get-single-question.component';

describe('GetSingleQuestionComponent', () => {
  let component: GetSingleQuestionComponent;
  let fixture: ComponentFixture<GetSingleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSingleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
