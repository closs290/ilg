import { TestBed } from '@angular/core/testing';

import { ILGService } from './ilg.service';

describe('ILGService', () => {
  let service: ILGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ILGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
