import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionFrontComponent } from './update-question-front.component';

describe('UpdateQuestionFrontComponent', () => {
  let component: UpdateQuestionFrontComponent;
  let fixture: ComponentFixture<UpdateQuestionFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestionFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuestionFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
