import { Component, OnInit } from '@angular/core';

import { HashincludeService } from '../../../services/hashinclude.service';

// import { $WebSocket } from 'angular2-websocket/angular2-websocket';

// import { ApiRootHostname_nodir } from '../../../classes/api-root';

// let myws = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/leaderboard/hashinclude");

@Component({
  selector: 'app-hashinclude-ranklist',
  templateUrl: './hashinclude-ranklist.component.html',
  styleUrls: ['./hashinclude-ranklist.component.css', '../hashinclude.component.css'],
  // providers: [{provide: $WebSocket, useValue: myws}]
})
export class HashincludeRanklistComponent implements OnInit {

  ranklist;

  constructor(
    private hashincludeService: HashincludeService
  ) { }

  ngOnInit() {
    this.loadRanklist();

    // myws.onMessage(
    //     (msg: MessageEvent)=> {
    //       if (msg.data.ranklist)
    //         this.ranklist = msg.data.ranklist;
    //     },
    //     {autoApply: false}
    // );
  }

  loadRanklist() {
    return this.hashincludeService.pullRanklist()
      .subscribe(response => {
        this.ranklist = response.ranklist;
      });
  }

}
