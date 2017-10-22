import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashincludeRulesComponent } from './hashinclude-rules.component';

describe('HashincludeRulesComponent', () => {
  let component: HashincludeRulesComponent;
  let fixture: ComponentFixture<HashincludeRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashincludeRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashincludeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
