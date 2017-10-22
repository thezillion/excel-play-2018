import { TestBed, inject } from '@angular/core/testing';

import { KryptosService } from './kryptos.service';

describe('KryptosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KryptosService]
    });
  });

  it('should be created', inject([KryptosService], (service: KryptosService) => {
    expect(service).toBeTruthy();
  }));
});
