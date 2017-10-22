import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { CookieService } from "angular2-cookie/services/cookies.service";

import { ApiRoot } from '../classes/api-root';

import { AuthService } from './auth.service';

import { ProgressiveLoader } from '../classes/progressive-loader';

import { Service } from '../classes/service';

import 'rxjs/add/operator/map';

@Injectable()
export class HashincludeService extends Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  addHIUser() {
    return this.makeGETAPICall('/hashinclude');
  }

  pullRanklist() {
    return this.makeGETAPICall('/hashinclude/ranklist');
  }

  pullMyRank() {
    return this.makeGETAPICall('/hashinclude/myrank');
  }

  pullAllMySubmissions() {
    return this.makeGETAPICall('/hashinclude/userview');
  }

  pullMySubmissions() {
    return this.makeGETAPICall('/hashinclude/mysub');
  }

  pullRecentSubmissions() {
    return this.makeGETAPICall('/hashinclude/subview');
  }

  pullTotalSubmissions() {
    return this.makeGETAPICall('/hashinclude/totsub');
  }

}
