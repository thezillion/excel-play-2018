import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KryptosComponent } from './kryptos.component';

describe('KryptosComponent', () => {
  let component: KryptosComponent;
  let fixture: ComponentFixture<KryptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KryptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
