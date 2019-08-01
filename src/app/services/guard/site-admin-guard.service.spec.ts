import { TestBed } from '@angular/core/testing';

import { SiteAdminGuardService } from './site-admin-guard.service';

describe('SiteAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteAdminGuardService = TestBed.get(SiteAdminGuardService);
    expect(service).toBeTruthy();
  });
});
