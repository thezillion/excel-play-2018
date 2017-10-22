import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalalbullRanklistComponent } from './dalalbull-ranklist.component';

describe('DalalbullRanklistComponent', () => {
  let component: DalalbullRanklistComponent;
  let fixture: ComponentFixture<DalalbullRanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalalbullRanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalalbullRanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
