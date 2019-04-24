import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStudentCheckboxComponent } from './filter-student-checkbox.component';

describe('FilterStudentCheckboxComponent', () => {
  let component: FilterStudentCheckboxComponent;
  let fixture: ComponentFixture<FilterStudentCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStudentCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStudentCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
