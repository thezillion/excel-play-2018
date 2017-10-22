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
export class ConvolutionService extends Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  addConvolutionUser() {
    return this.makeGETAPICall('/convolution');
  }

  pullRanklist() {
    return this.makeGETAPICall('/convolution/ranklist');
  }

  pullMyRank() {
    return this.makeGETAPICall('/convolution/myrank');
  }

  pullMySubmissions() {
    return this.makeGETAPICall('/convolution/mysub');
  }

  pullRecentSubmissions() {
    return this.makeGETAPICall('/convolution/recentsub');
  }

}

