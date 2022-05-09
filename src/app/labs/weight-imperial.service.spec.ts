import { TestBed } from '@angular/core/testing';

import { WeightImperialService } from './weight-imperial.service';

describe('WeightImperialService', () => {
  let service: WeightImperialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightImperialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
