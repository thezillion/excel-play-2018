import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvolutionSubmitComponent } from './convolution-submit.component';

describe('ConvolutionSubmitComponent', () => {
  let component: ConvolutionSubmitComponent;
  let fixture: ComponentFixture<ConvolutionSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvolutionSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvolutionSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
