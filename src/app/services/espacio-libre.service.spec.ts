import { TestBed } from '@angular/core/testing';

import { EspacioLibreService } from './espacio-libre.service';

describe('EspacioLibreService', () => {
  let service: EspacioLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspacioLibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
