import { TestBed } from '@angular/core/testing';

import { AmazonGuard } from './amazon.guard';

describe('AmazonGuard', () => {
  let guard: AmazonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AmazonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
