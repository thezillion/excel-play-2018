import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalalbullComponent } from './dalalbull.component';

describe('DalalbullComponent', () => {
  let component: DalalbullComponent;
  let fixture: ComponentFixture<DalalbullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalalbullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalalbullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
