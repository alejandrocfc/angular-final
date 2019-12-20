import { TestBed } from '@angular/core/testing';

import { SetNumberService } from './set-number.service';

describe('SetNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetNumberService = TestBed.get(SetNumberService);
    expect(service).toBeTruthy();
  });
});
