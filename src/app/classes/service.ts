import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { ApiRoot } from '../classes/api-root';

import { AuthService } from '../services/auth.service';

import { ProgressiveLoader } from './progressive-loader';

import { map } from 'rxjs/operators';

export class Service {

  constructor(
    protected router: Router,
    protected http: HttpClient,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) { }

  public makeGETAPICall(url) {
    const loader = new ProgressiveLoader();
    loader.placeLoader('Auth_ss');
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(ApiRoot() + url, { headers, withCredentials: true })
      .pipe(map(res => {
        loader.removeLoader();
        if (res.hasOwnProperty("error"))
          this.router.navigate(['/signin']);
        return res;
      }));
  }

  public makePOSTAPICall(url, data) {
    // data.append('csrfmiddlewaretoken', this.cookieService.get('csrftoken'));
    const loader = new ProgressiveLoader();
    loader.placeLoader('Auth_ss');
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'text/plain; charset=UTF-8');
    return this.http.post(ApiRoot() + url, (data), { withCredentials: true })
      .pipe(map(res => {
        loader.removeLoader();
        if (res.hasOwnProperty("error"))
          this.router.navigate(['/signin']);
        return res;
      }));
  }

}
