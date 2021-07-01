import { TestBed } from '@angular/core/testing';

import { CRUDParcService } from './crud-parc.service';
import { ParcautoComponent } from './../parcauto.component';

describe('CRUDParcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CRUDParcService<ParcautoComponent> = TestBed.get(CRUDParcService);
    expect(service).toBeTruthy();
  });
});
