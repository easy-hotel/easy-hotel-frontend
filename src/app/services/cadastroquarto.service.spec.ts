import { TestBed } from '@angular/core/testing';

import { CadastroquartoService } from './cadastroquarto.service';

describe('CadastroquartoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroquartoService = TestBed.get(CadastroquartoService);
    expect(service).toBeTruthy();
  });
});
