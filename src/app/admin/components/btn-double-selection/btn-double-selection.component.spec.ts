import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDoubleSelectionComponent } from './btn-double-selection.component';

describe('BtnDoubleSelectionComponent', () => {
  let component: BtnDoubleSelectionComponent;
  let fixture: ComponentFixture<BtnDoubleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDoubleSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDoubleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
