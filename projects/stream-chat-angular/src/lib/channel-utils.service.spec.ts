import { TestBed } from '@angular/core/testing';

import { ChannelUtilsService } from './channel-utils.service';

describe('ChannelUtilsService', () => {
  let service: ChannelUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
