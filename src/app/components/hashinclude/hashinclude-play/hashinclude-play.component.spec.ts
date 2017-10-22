import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashincludePlayComponent } from './hashinclude-play.component';

describe('HashincludePlayComponent', () => {
  let component: HashincludePlayComponent;
  let fixture: ComponentFixture<HashincludePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashincludePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashincludePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
