import { TestBed } from '@angular/core/testing';

import { ApiContactFormService } from './api-contact-form.service';

describe('ApiContactFormService', () => {
  let service: ApiContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
