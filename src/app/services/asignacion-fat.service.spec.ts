import { TestBed } from '@angular/core/testing';

import { AsignacionFatService } from './asignacion-fat.service';

describe('AsignacionFatService', () => {
  let service: AsignacionFatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionFatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
