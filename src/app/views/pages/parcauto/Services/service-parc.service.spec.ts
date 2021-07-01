import { TestBed } from '@angular/core/testing';

import { ServiceParcService } from './service-parc.service';

describe('ServiceParcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceParcService = TestBed.get(ServiceParcService);
    expect(service).toBeTruthy();
  });
});
