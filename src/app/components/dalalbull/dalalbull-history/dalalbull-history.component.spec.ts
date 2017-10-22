import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalalbullHistoryComponent } from './dalalbull-history.component';

describe('DalalbullHistoryComponent', () => {
  let component: DalalbullHistoryComponent;
  let fixture: ComponentFixture<DalalbullHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalalbullHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalalbullHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
