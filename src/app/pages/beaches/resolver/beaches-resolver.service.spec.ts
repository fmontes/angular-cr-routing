import { TestBed } from '@angular/core/testing';

import { BeachesResolverService } from './beaches-resolver.service';

describe('BeachesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeachesResolverService = TestBed.get(BeachesResolverService);
    expect(service).toBeTruthy();
  });
});
