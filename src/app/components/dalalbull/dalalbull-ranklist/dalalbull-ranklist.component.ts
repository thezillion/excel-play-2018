import { Component, OnInit } from '@angular/core';

import { DalalbullService } from '../../../services/dalalbull.service';

@Component({
  selector: 'app-dalalbull-ranklist',
  templateUrl: './dalalbull-ranklist.component.html',
  styleUrls: ['./dalalbull-ranklist.component.css', '../dalalbull.component.css']
})
export class DalalbullRanklistComponent implements OnInit {

  ranklist;

  constructor(
    private dalalbullService: DalalbullService
  ) { }

  ngOnInit() {
    this.loadRanklist();
  }

  loadRanklist() {
    return this.dalalbullService.pullRanklist()
      .subscribe(response => {
        this.ranklist = response.leaderboard_data;
      });
  }

}
