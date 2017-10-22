import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashincludeRanklistComponent } from './hashinclude-ranklist.component';

describe('HashincludeRanklistComponent', () => {
  let component: HashincludeRanklistComponent;
  let fixture: ComponentFixture<HashincludeRanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashincludeRanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashincludeRanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
