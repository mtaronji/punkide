import { TestBed } from '@angular/core/testing';

import { PunkLibService } from './punk-pad.service';

describe('PunkLibService', () => {
  let service: PunkLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunkLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
