import { TestBed } from '@angular/core/testing';

import { OperatorPresenterService } from './operator-presenter.service';

describe('OperatorPresenterService', () => {
  let service: OperatorPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
