import { TestBed } from '@angular/core/testing';

import { AbattoirService } from './abattoir.service';

describe('AbattoirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbattoirService = TestBed.get(AbattoirService);
    expect(service).toBeTruthy();
  });
});
