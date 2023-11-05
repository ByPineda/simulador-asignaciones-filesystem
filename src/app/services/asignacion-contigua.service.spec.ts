import { TestBed } from '@angular/core/testing';

import { AsignacionContiguaService } from './asignacion-contigua.service';

describe('AsignacionContiguaService', () => {
  let service: AsignacionContiguaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionContiguaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
