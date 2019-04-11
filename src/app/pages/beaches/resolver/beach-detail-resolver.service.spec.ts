import { TestBed } from '@angular/core/testing';

import { BeachDetailResolverService } from './beach-detail-resolver.service';

describe('BeachDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeachDetailResolverService = TestBed.get(BeachDetailResolverService);
    expect(service).toBeTruthy();
  });
});
