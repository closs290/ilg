import { TestBed } from '@angular/core/testing';

import { InterlinearGlossService } from './interlinear-gloss.service';

describe('InterlinearGlossService', () => {
  let service: InterlinearGlossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterlinearGlossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
