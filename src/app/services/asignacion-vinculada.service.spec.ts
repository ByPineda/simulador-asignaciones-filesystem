import { TestBed } from '@angular/core/testing';

import { AsignacionVinculadaService } from './asignacion-vinculada.service';

describe('AsignacionVinculadaService', () => {
  let service: AsignacionVinculadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionVinculadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
