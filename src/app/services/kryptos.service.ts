import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { CookieService } from "angular2-cookie/services/cookies.service";

import { AuthService } from './auth.service';

import { ProgressiveLoader } from '../classes/progressive-loader';

import { Service } from '../classes/service';

@Injectable()
export class KryptosService extends Service {

  constructor(
    protected router: Router,
    protected http: HttpClient,
    // protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, auth);
  }

  pullUserLevel() {
    return this.makeGETAPICall('/kryptos/');
  }

  pullRanklist() {
    return this.makeGETAPICall('/kryptos/ranklist');
  }

  submitAnswer(answer) {
    let body = new FormData();
    body.append('answer', answer);
    // body.append('csrfmiddlewaretoken', this.cookieService.get('csrftoken'));

    return this.makePOSTAPICall('/kryptos/submitanswer', body);
  }

  pullMyRank() {
    return this.makeGETAPICall('/kryptos/myrank/');
  }

}
