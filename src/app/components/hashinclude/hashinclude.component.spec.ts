import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashincludeComponent } from './hashinclude.component';

describe('HashincludeComponent', () => {
  let component: HashincludeComponent;
  let fixture: ComponentFixture<HashincludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashincludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashincludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
