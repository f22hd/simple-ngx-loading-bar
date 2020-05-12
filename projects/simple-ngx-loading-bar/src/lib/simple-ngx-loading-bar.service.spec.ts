import { TestBed } from '@angular/core/testing';

import { SimpleNgxLoadingBarService } from './simple-ngx-loading-bar.service';

describe('SimpleNgxLoadingBarService', () => {
  let service: SimpleNgxLoadingBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleNgxLoadingBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
