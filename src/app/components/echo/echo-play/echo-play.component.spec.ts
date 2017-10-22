import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoPlayComponent } from './echo-play.component';

describe('EchoPlayComponent', () => {
  let component: EchoPlayComponent;
  let fixture: ComponentFixture<EchoPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
