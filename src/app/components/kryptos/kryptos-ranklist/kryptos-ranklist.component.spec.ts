import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KryptosRanklistComponent } from './kryptos-ranklist.component';

describe('KryptosRanklistComponent', () => {
  let component: KryptosRanklistComponent;
  let fixture: ComponentFixture<KryptosRanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KryptosRanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KryptosRanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
