import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KryptosPlayComponent } from './kryptos-play.component';

describe('KryptosPlayComponent', () => {
  let component: KryptosPlayComponent;
  let fixture: ComponentFixture<KryptosPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KryptosPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KryptosPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
