import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnjectListSortComponent } from './onject-list-sort.component';

describe('OnjectListSortComponent', () => {
  let component: OnjectListSortComponent;
  let fixture: ComponentFixture<OnjectListSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnjectListSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnjectListSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
