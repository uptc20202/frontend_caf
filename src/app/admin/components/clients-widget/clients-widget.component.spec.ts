import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsWidgetComponent } from './clients-widget.component';

describe('ClientsWidgetComponent', () => {
  let component: ClientsWidgetComponent;
  let fixture: ComponentFixture<ClientsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
