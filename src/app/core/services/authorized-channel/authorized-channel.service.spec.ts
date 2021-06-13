import { TestBed } from '@angular/core/testing';

import { AuthorizedChannelService } from './authorized-channel.service';

describe('AuthorizedChannelService', () => {
  let service: AuthorizedChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
