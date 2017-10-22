import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvolutionComponent } from './convolution.component';

describe('ConvolutionComponent', () => {
  let component: ConvolutionComponent;
  let fixture: ComponentFixture<ConvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
