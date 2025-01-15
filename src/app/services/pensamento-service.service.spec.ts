import { TestBed } from '@angular/core/testing';

import { PensamentoServiceService } from './pensamento-service.service';

describe('PensamentoServiceService', () => {
  let service: PensamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
