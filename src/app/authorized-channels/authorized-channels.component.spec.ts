import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedChannelsComponent } from './authorized-channels.component';

describe('AuthorizedChannelsComponent', () => {
  let component: AuthorizedChannelsComponent;
  let fixture: ComponentFixture<AuthorizedChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
