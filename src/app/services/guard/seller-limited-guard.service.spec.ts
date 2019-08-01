import { TestBed } from '@angular/core/testing';

import { SellerLimitedGuardService } from './seller-limited-guard.service';

describe('SellerLimitedGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerLimitedGuardService = TestBed.get(SellerLimitedGuardService);
    expect(service).toBeTruthy();
  });
});
