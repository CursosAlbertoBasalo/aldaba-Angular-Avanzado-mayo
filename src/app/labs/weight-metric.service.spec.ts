import { TestBed } from '@angular/core/testing';

import { WeightMetricService } from './weight-metric.service';

describe('WeightMetricService', () => {
  let service: WeightMetricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightMetricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
