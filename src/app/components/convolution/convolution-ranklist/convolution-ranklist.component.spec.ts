import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvolutionRanklistComponent } from './convolution-ranklist.component';

describe('ConvolutionRanklistComponent', () => {
  let component: ConvolutionRanklistComponent;
  let fixture: ComponentFixture<ConvolutionRanklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvolutionRanklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvolutionRanklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
