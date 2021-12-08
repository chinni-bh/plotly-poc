import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChartEventsComponent } from './custom-chart-events.component';

describe('CustomChartEventsComponent', () => {
  let component: CustomChartEventsComponent;
  let fixture: ComponentFixture<CustomChartEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChartEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChartEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
