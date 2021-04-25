import { TestBed } from '@angular/core/testing';

import { PaginatedChannelsService } from './paginated-channels.service';

describe('PaginatedChannelsService', () => {
  let service: PaginatedChannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatedChannelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
