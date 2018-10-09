import { Injectable } from '@angular/core';

import { Service } from '../classes/service';

import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ApiRoot } from '../classes/api-root';
import { AuthService } from './auth.service';

@Injectable()
export class CommonService extends Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  pullMyRanks() {
    return this.makeGETAPICall('/getRank');
  }

}
