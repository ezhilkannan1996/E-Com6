import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceorderAlertComponent } from './placeorder-alert.component';

describe('PlaceorderAlertComponent', () => {
  let component: PlaceorderAlertComponent;
  let fixture: ComponentFixture<PlaceorderAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceorderAlertComponent]
    });
    fixture = TestBed.createComponent(PlaceorderAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
