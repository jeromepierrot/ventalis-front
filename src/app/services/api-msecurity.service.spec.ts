import { TestBed } from '@angular/core/testing';

import { ApiMsecurityService } from './api-msecurity.service';

describe('ApiMsecurityService', () => {
  let service: ApiMsecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMsecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
