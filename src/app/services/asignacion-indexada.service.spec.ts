import { TestBed } from '@angular/core/testing';

import { AsignacionIndexadaService } from './asignacion-indexada.service';

describe('AsignacionIndexadaService', () => {
  let service: AsignacionIndexadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionIndexadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
