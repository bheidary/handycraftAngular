import { TestBed } from '@angular/core/testing';

import { SellerPremiumGuardService } from './seller-premium-guard.service';

describe('SellerPremiumGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerPremiumGuardService = TestBed.get(SellerPremiumGuardService);
    expect(service).toBeTruthy();
  });
});
