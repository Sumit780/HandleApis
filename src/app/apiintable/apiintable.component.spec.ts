import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiintableComponent } from './apiintable.component';

describe('ApiintableComponent', () => {
  let component: ApiintableComponent;
  let fixture: ComponentFixture<ApiintableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiintableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
