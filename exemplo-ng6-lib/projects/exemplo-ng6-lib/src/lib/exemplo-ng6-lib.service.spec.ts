import { TestBed, inject } from '@angular/core/testing';

import { ExemploNg6LibService } from './exemplo-ng6-lib.service';

describe('ExemploNg6LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExemploNg6LibService]
    });
  });

  it('should be created', inject([ExemploNg6LibService], (service: ExemploNg6LibService) => {
    expect(service).toBeTruthy();
  }));
});
