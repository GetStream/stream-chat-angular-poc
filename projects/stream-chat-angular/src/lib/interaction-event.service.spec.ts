import { TestBed } from '@angular/core/testing';

import { ChatInteractionService } from './interaction-event.service';

describe('ChatInteractionService', () => {
  let service: ChatInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
