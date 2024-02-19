import { TestBed } from '@angular/core/testing';

import { ServiceApimovieService } from './service-apimovie.service';

describe('ServiceApimovieService', () => {
  let service: ServiceApimovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApimovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
