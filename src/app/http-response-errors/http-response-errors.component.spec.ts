import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseErrorsComponent } from './http-response-errors.component';

describe('HttpResponseErrorsComponent', () => {
  let component: HttpResponseErrorsComponent;
  let fixture: ComponentFixture<HttpResponseErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpResponseErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpResponseErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
