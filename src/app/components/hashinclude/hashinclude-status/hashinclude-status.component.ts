import { Component, OnInit } from '@angular/core';

import { HashincludeService } from '../../../services/hashinclude.service';

import { $WebSocket } from 'angular2-websocket/angular2-websocket';

import { ApiRootHostname_nodir } from '../../../classes/api-root';

let myws = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/hashinclude/submissions");

@Component({
  selector: 'app-hashinclude-status',
  templateUrl: './hashinclude-status.component.html',
  styleUrls: ['./hashinclude-status.component.css', '../hashinclude.component.css'],
  providers: [{provide: $WebSocket, useValue: myws}]
})
export class HashincludeStatusComponent implements OnInit {

  recent_submissions;

  languages = {
    "c++": "C++",
    "c": "C",
    "java": "Java",
    "python2": "Python 2",
    "python3": "Python 3"
  };

  problems = [
    "Complex Strings",
    "Patterns",
    "Travel them all",
    "Candy Fight",
    "EXCEL-lent Arrays",
    "Classes in MEC",
    "Garland of Love",
  ];

  constructor(
    private hashincludeService: HashincludeService
  ) { }

  ngOnInit() {
    this.getRecentSubmissions();

    myws.onMessage(
        (msg: MessageEvent)=> {
          if (msg.data) {
            var data = JSON.parse(msg.data);
            var tid = data.tid,
            new_verdict = data.verdict;
            var matching_rs = this.recent_submissions.find(r => r.tid == tid);
            if (matching_rs) {
              matching_rs.verdict = data.verdict;
            } else {
              this.recent_submissions.unshift(data);
            }
          }
        },
        {autoApply: false}
    );
  }

  getRecentSubmissions() {
    this.hashincludeService.pullRecentSubmissions()
      .subscribe(res => {
        this.recent_submissions = res["sub_view "];
        this.recent_submissions.forEach(rs => {
          rs.time = new Date(rs.time);
        });
      });
  }

}
