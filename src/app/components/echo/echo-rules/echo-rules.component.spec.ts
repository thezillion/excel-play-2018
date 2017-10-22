import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoRulesComponent } from './echo-rules.component';

describe('EchoRulesComponent', () => {
  let component: EchoRulesComponent;
  let fixture: ComponentFixture<EchoRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
