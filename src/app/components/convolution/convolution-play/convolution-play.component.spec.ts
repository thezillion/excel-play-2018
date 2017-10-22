import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvolutionPlayComponent } from './convolution-play.component';

describe('ConvolutionPlayComponent', () => {
  let component: ConvolutionPlayComponent;
  let fixture: ComponentFixture<ConvolutionPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvolutionPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvolutionPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
