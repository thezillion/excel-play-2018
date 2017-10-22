import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalalbullRulesComponent } from './dalalbull-rules.component';

describe('DalalbullRulesComponent', () => {
  let component: DalalbullRulesComponent;
  let fixture: ComponentFixture<DalalbullRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalalbullRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalalbullRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
