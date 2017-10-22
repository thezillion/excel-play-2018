import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { DalalbullService } from '../../../services/dalalbull.service';

@Component({
  selector: 'app-dalalbull-history',
  templateUrl: './dalalbull-history.component.html',
  styleUrls: ['./dalalbull-history.component.css', '../dalalbull.component.css']
})
export class DalalbullHistoryComponent implements OnInit {

  history;
  currentTab: string;

  constructor(
    private dalalbullService: DalalbullService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        var tab_whitelist = ['completed', 'pending'];
        if (!params['tab'] || tab_whitelist.indexOf(params['tab']) == -1) {
          this.router.navigateByUrl('/games/dalalbull/history/completed');
        } else {
          this.currentTab = params['tab'];
          this.loadHistoryData(this.currentTab);
        }
      })
  }

  loadHistoryData(tab) {
    if (tab == 'completed') {
      this.dalalbullService.pullTransactionHistory_completed()
        .subscribe(res => {
          this.history = res.history.reverse();
        });
    } else {
      this.dalalbullService.pullTransactionHistory_pending()
        .subscribe(res => {
          this.history = res.pending;
        });
    }
  }

}
