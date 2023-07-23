import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTicketPageComponent } from './create-ticket-page.component';

describe('CreateTicketPageComponent', () => {
  let component: CreateTicketPageComponent;
  let fixture: ComponentFixture<CreateTicketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTicketPageComponent]
    });
    fixture = TestBed.createComponent(CreateTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
