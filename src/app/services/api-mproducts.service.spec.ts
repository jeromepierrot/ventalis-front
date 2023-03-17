import { TestBed } from '@angular/core/testing';

import { ApiMproductsService } from './api-mproducts.service';

describe('ApiMproductsService', () => {
  let service: ApiMproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
