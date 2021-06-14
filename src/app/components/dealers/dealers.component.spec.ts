import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersComponent } from './dealers.component';
import {environment} from "../../../environments/environment";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DealersComponent', () => {
  let component: DealersComponent;
  let fixture: ComponentFixture<DealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'apiEndpoint', useValue: environment.apiEndpoint}],
      imports: [ HttpClientTestingModule ],
      declarations: [ DealersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
