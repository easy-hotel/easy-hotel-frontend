import { TestBed } from '@angular/core/testing';

import { CadastrohotelService } from './cadastrohotel.service';

describe('CadastrohotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastrohotelService = TestBed.get(CadastrohotelService);
    expect(service).toBeTruthy();
  });
});
