import { TestBed } from '@angular/core/testing';

import { PlaceorderalertService } from './placeorderalert.service';

describe('PlaceorderalertService', () => {
  let service: PlaceorderalertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceorderalertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
