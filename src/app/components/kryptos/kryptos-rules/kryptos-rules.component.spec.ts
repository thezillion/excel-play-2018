import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KryptosRulesComponent } from './kryptos-rules.component';

describe('KryptosRulesComponent', () => {
  let component: KryptosRulesComponent;
  let fixture: ComponentFixture<KryptosRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KryptosRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KryptosRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
