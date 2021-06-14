import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedChannelsComponent } from './authorizedChannels.component';
import {environment} from "../../../environments/environment";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AuthorizedChannelsComponent', () => {
  let component: AuthorizedChannelsComponent;
  let fixture: ComponentFixture<AuthorizedChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'apiEndpoint', useValue: environment.apiEndpoint}],
      imports: [ HttpClientTestingModule ],
      declarations: [ AuthorizedChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
