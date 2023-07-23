import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsStatisticsPageComponent } from './tickets-statistics-page.component';

describe('TicketsStatisticsPageComponent', () => {
  let component: TicketsStatisticsPageComponent;
  let fixture: ComponentFixture<TicketsStatisticsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsStatisticsPageComponent]
    });
    fixture = TestBed.createComponent(TicketsStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
