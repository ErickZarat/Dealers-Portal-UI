import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuthorizedChannelComponent } from './delete-authorizedChannel.component';

describe('DeleteAuthorizedChannelComponent', () => {
  let component: DeleteAuthorizedChannelComponent;
  let fixture: ComponentFixture<DeleteAuthorizedChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAuthorizedChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAuthorizedChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
