import { ComponentFixture, TestBed } from '@angular/core/testing';
import {EditAuthorizedChannelComponent} from "./edit-authorized-channels.component";


describe('AddAuthorizedChannelComponent', () => {
  let component: EditAuthorizedChannelComponent;
  let fixture: ComponentFixture<EditAuthorizedChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuthorizedChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuthorizedChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
