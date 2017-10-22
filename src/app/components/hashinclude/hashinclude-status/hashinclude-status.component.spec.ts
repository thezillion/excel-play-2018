import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashincludeStatusComponent } from './hashinclude-status.component';

describe('HashincludeStatusComponent', () => {
  let component: HashincludeStatusComponent;
  let fixture: ComponentFixture<HashincludeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashincludeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashincludeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
