import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalalbullPlayComponent } from './dalalbull-play.component';

describe('DalalbullPlayComponent', () => {
  let component: DalalbullPlayComponent;
  let fixture: ComponentFixture<DalalbullPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalalbullPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalalbullPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
