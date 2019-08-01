import { TestBed } from '@angular/core/testing';

import { SellerGuardService } from './seller-guard.service';

describe('SellerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerGuardService = TestBed.get(SellerGuardService);
    expect(service).toBeTruthy();
  });
});
