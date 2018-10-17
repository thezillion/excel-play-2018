import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from './auth.service';

import { ProgressiveLoader } from '../classes/progressive-loader';

import { Service } from '../classes/service';

@Injectable()
export class KryptosService extends Service {

  constructor(
    protected router: Router,
    protected http: HttpClient,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  pullUserLevel() {
    return this.makeGETAPICall('/kryptos/api/ask');
  }

  pullRanklist() {
    return this.makeGETAPICall('/kryptos/api/ranklist');
  }

  submitAnswer(answer) {
    let body = new FormData();
    body.append('answer', answer);
    body.append('csrfmiddlewaretoken', this.cookieService.get('csrftoken'));

    return this.makePOSTAPICall('/kryptos/api/answer', body);
  }

  pullMyRank() {
    return this.makeGETAPICall('/kryptos/api/rank');
  }

}
