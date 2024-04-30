import { TestBed } from '@angular/core/testing';

import { EdataService } from './edata.service';

describe('EdataService', () => {
  let service: EdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
