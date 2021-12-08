import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTooltipComponent } from './notes-tooltip.component';

describe('NotesTooltipComponent', () => {
  let component: NotesTooltipComponent;
  let fixture: ComponentFixture<NotesTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
