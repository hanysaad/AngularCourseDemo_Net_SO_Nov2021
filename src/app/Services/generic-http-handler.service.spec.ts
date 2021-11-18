import { TestBed } from '@angular/core/testing';

import { GenericHttpHandlerService } from './generic-http-handler.service';

describe('GenericHttpHandlerService', () => {
  let service: GenericHttpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericHttpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
