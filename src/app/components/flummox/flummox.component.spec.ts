import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlummoxComponent } from './flummox.component';

describe('FlummoxComponent', () => {
  let component: FlummoxComponent;
  let fixture: ComponentFixture<FlummoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlummoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlummoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
