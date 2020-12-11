import { TestBed } from '@angular/core/testing';

import { AssemblyLineService } from './assembly-line.service';

describe('AssemblyLineService', () => {
  let service: AssemblyLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblyLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
