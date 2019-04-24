import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsiteDataHandleComponent } from './jobsite-data-handle.component';

describe('JobsiteDataHandleComponent', () => {
  let component: JobsiteDataHandleComponent;
  let fixture: ComponentFixture<JobsiteDataHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsiteDataHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsiteDataHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
