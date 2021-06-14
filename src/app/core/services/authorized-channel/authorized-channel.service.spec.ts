import { TestBed } from '@angular/core/testing';

import { AuthorizedChannelService } from './authorized-channel.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";

describe('AuthorizedChannelService', () => {
  let service: AuthorizedChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'apiEndpoint', useValue: environment.apiEndpoint}],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AuthorizedChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
