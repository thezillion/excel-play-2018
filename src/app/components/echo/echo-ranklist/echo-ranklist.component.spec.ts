import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoRanklistComponent } from './echo-ranklist.component';

describe('EchoRanklistComponent', () => {
  let component: EchoRanklistComponent;
  let fixture: ComponentFixture<EchoRanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoRanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoRanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
