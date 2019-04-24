import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrObjSortComponent } from './arr-obj-sort.component';

describe('ArrObjSortComponent', () => {
  let component: ArrObjSortComponent;
  let fixture: ComponentFixture<ArrObjSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrObjSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrObjSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
