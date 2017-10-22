import { Component, OnInit } from '@angular/core';

import { EchoService } from '../../../services/echo.service';

@Component({
  selector: 'app-echo-ranklist',
  templateUrl: './echo-ranklist.component.html',
  styleUrls: ['./echo-ranklist.component.css', '../echo.component.css']
})
export class EchoRanklistComponent implements OnInit {

  ranklist: any;

  constructor(
    private echoService: EchoService
  ) { }

  ngOnInit() {
    this.loadRanklist();
  }

  loadRanklist() {
    return this.echoService.pullRanklist()
      .subscribe(response => {
        this.ranklist = response.ranklist;
      });
  }


}
