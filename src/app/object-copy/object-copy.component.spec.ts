import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCopyComponent } from './object-copy.component';

describe('ObjectCopyComponent', () => {
  let component: ObjectCopyComponent;
  let fixture: ComponentFixture<ObjectCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
