import { TestBed } from '@angular/core/testing';

import { ProductBackendService } from './product-backend.service';

describe('ProductBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBackendService = TestBed.get(ProductBackendService);
    expect(service).toBeTruthy();
  });
});
