import { TestBed } from '@angular/core/testing';

import { NgxLoadingBarService } from './ngx-loading-bar.service';

describe('NgxLoadingBarService', () => {
  let service: NgxLoadingBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoadingBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
