import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvolutionRulesComponent } from './convolution-rules.component';

describe('ConvolutionRulesComponent', () => {
  let component: ConvolutionRulesComponent;
  let fixture: ComponentFixture<ConvolutionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvolutionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvolutionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
