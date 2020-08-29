import { TestBed } from '@angular/core/testing';

import { SharedPathService } from './shared-path.service';

describe('SharedPathService', () => {
  let service: SharedPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
