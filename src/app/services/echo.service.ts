import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { CookieService } from "angular2-cookie/services/cookies.service";

import { ApiRoot } from '../classes/api-root';

import { AuthService } from './auth.service';

import { Service } from '../classes/service';

declare function unescape(s:string): string;
declare function escape(s:string): string;

@Injectable()
export class EchoService extends Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  addEchoUser() {
    return this.makeGETAPICall('/echo');
  }

  pullRanklist() {
    return this.makeGETAPICall('/echo/leaderboard');
  }

  pullMyRank() {
    return this.makeGETAPICall('/echo/myrank');
  }

  executeCommand(command) {
    let body = new FormData();
    // command = encodeURIComponent(command);
    // command = command.replace(/%0A/g, '');
    // command = command.replace(/%0D/g, '');
    // command = unescape(command);
    // command = unescape(encodeURIComponent(command)).replace(/\n/g, '');
    console.log(command.replace(/\r/g, '').match(/\r/));
    body.append('term', command);
    return this.makePOSTAPICall('/echo/submit', body);
  }

  submitLevel(command) {
    let body = new FormData();
    body.append('code', command);
    body.append('execute', 'true');
    return this.makePOSTAPICall('/echo/submit', body);
  }

  saveCode(command) {
    let body = new FormData();
    body.append('code', command);
    body.append('save', 'true');
    return this.makePOSTAPICall('/echo/submit', body);
  }

}
