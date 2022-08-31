import { TestBed } from '@angular/core/testing';

import { GenerateService } from '../../service/generate.service';

describe('GenerateService', () => {
  let service: GenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
