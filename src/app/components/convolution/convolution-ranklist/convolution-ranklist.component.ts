import { Component, OnInit } from '@angular/core';
import { ConvolutionService } from '../../../services/convolution.service';

@Component({
  selector: 'app-convolution-ranklist',
  templateUrl: './convolution-ranklist.component.html',
  styleUrls: ['./convolution-ranklist.component.css']
})
export class ConvolutionRanklistComponent implements OnInit {

  ranklist;
  constructor(
	private convolutionService: ConvolutionService
  ) {
  }

  ngOnInit() {
  	this.loadRanklist();
	}

  loadRanklist()
	{
	return this.convolutionService.pullRanklist().subscribe(response => {
		this.ranklist=response.ranklist;
		});
	}
}
