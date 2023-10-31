import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsWidgetComponent } from './workouts-widget.component';

describe('WorkoutsWidgetComponent', () => {
  let component: WorkoutsWidgetComponent;
  let fixture: ComponentFixture<WorkoutsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
