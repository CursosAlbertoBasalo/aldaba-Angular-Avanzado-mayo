import { TestBed } from '@angular/core/testing';

import { WeightAbstractService } from './weight-abstract.service';

describe('WeightAbstractService', () => {
  let service: WeightAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
