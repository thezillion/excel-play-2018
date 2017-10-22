import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalalbullStockComponent } from './dalalbull-stock.component';

describe('DalalbullStockComponent', () => {
  let component: DalalbullStockComponent;
  let fixture: ComponentFixture<DalalbullStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalalbullStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalalbullStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
