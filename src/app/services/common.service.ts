import { Injectable } from '@angular/core';

import { Service } from '../classes/service';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ApiRoot } from '../classes/api-root';
import { AuthService } from './auth.service';

@Injectable()
export class CommonService extends Service {

  constructor(
    protected router: Router,
    protected http: HttpClient,
    // protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, auth);
  }

  pullMyRanks() {
    return this.makeGETAPICall('/getRank');
  }

}
