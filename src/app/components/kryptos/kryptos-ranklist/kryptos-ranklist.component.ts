import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { KryptosService } from 'src/app/services/kryptos.service';
import { Level } from 'src/app/classes/level';

// import { $WebSocket } from 'angular2-websocket/angular2-websocket';
//
// import { ApiRootHostname_nodir } from '../../../classes/api-root';
//
// let myws = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/leaderboard/kryptos");

@Component({
  selector: 'app-kryptos-ranklist',
  templateUrl: './kryptos-ranklist.component.html',
  styleUrls: ['./kryptos-ranklist.component.css', '../kryptos.component.css'],
  // providers: [{provide: $WebSocket, useValue: myws}]
})
export class KryptosRanklistComponent implements OnInit {

  ranklist;

  constructor(
    private kryptosService: KryptosService
  ) { }

  ngOnInit() {
    // this.ws.WebSocketConfig.reconnectIfNotNormalClose = true
    this.loadRanklist();
    // this.ws.onConn
    // myws.onMessage(
    //     (msg: MessageEvent)=> {
    //         // console.log("onMessage ", msg.data);
    //         if (msg.data.ranklist)
    //           this.ranklist = msg.data.ranklist;
    //     },
    //     {autoApply: false}
    // );
  }

  loadRanklist() {
    return this.kryptosService.pullRanklist()
      .pipe(tap(response => {
        this.ranklist = response["ranklist"];
      }));

    // var ws = new $WebSocket('ws://localhost:8000/leaderboard/kryptos');
    // ws.send(event);
    //
    // ws.onMessage(
    //   (msg: MessageEvent)=> {
    //       console.log("onMessage ", msg.data);
    //   },
    //   {autoApply: false}
    // );


    // let ws = new ReconnectingWebSocket('ws://localhost:8000/leaderboard/kryptos', null);
    // return this.makeGETAPICall('/kryptos/ranklist');
    // ws.onmessage = ((e) => {
    //   console.log(e);
    // });
  }

}
