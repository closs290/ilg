import { TestBed } from '@angular/core/testing';

import { IlgService } from './ilg.service';

describe('IlgService', () => {
  let service: IlgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
