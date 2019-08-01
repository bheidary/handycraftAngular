import { TestBed } from '@angular/core/testing';

import { AuthDbaService } from './auth-dba.service';

describe('AuthDbaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthDbaService = TestBed.get(AuthDbaService);
    expect(service).toBeTruthy();
  });
});
