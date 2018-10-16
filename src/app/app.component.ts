import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AuthService } from './services/auth.service';

// import { $WebSocket } from 'angular2-websocket/angular2-websocket';

import { ApiRootHostname_nodir } from './classes/api-root';

// let myws = new $WebSocket('ws://' + ApiRootHostname_nodir() + 'channel/getUserCount');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('appState', [
      state('active', style({
        width: '25%'
      })),
      state('inactive',   style({
        width: '4%'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('brandState', [
      state('max', style({
        transform: 'none'
      })),
      state('min',   style({
        transform: 'rotate(-90deg)',
        fontSize: '41px',
        width: '94%'
      })),
      transition('max => min', animate('500ms ease-in')),
      transition('min => max', animate('500ms ease-out'))
    ]),
    trigger('contentState', [
      state('active', style({
        width: '75%'
      })),
      state('inactive',   style({
        width: '95%'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('dockState', [
      state('active', style({
        right: '0px'
      })),
      state('inactive',   style({
        right: '-300px'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('exlogoState', [
      state('visible', style({
        opacity: '1'
      })),
      state('invisible',   style({
        opacity: '0',
        display: 'none'
      })),
      transition('visible => invisible', animate('500ms ease-in')),
      transition('invisible => visible', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  appState: string;
  contentState: string;
  dockState: string;
  brandState: string;
  exlogoState: string;
  userCount: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService
  ) {
    this.appState = 'active';
    this.contentState = 'active';
    this.dockState = 'inactive';
    this.brandState = 'max';
    this.exlogoState = 'visible';
    // this.loadUserCount();
  }

  onActivate(event) {
    var url = this.router.url;
    var blacklist = ['/', '/signin', '/callback'];
    if (blacklist.indexOf(url) == -1) {
      setTimeout(() => {
        this.appState = 'inactive';
        this.brandState = 'min';
      }, 500);
      setTimeout(() => {
        this.contentState = 'inactive';
        this.exlogoState = 'invisible';
      }, 700);
      setTimeout(() => {
        this.dockState = 'active';
      }, 1000);
    } else {
      setTimeout(() => {
        this.appState = 'active';
        this.brandState = 'max';
      }, 1000);
      setTimeout(() => {
        this.contentState = 'active';
        this.exlogoState = 'visible';
      }, 700);
      setTimeout(() => {
        this.dockState = 'inactive';
      }, 200);
    }
  }

  loadUserCount() {
    this.auth.pullUserCount()
      .subscribe((res) => {
        if (res.hasOwnProperty("count"))
          this.userCount = res["count"];
      });
    // myws.onMessage(
    //     (msg: MessageEvent) => {
    //         if (msg.data.ranklist)
    //           this.userCount = msg.data.count;
    //     },
    //     {autoApply: false}
    // );
  }
}
