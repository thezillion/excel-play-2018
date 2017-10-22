import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashincludeMysubComponent } from './hashinclude-mysub.component';

describe('HashincludeMysubComponent', () => {
  let component: HashincludeMysubComponent;
  let fixture: ComponentFixture<HashincludeMysubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashincludeMysubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashincludeMysubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
