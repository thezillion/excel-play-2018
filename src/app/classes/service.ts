import { Http, Headers } from '@angular/http';

import { Router } from '@angular/router';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { ApiRoot } from '../classes/api-root';

import { AuthService } from '../services/auth.service';

import { ProgressiveLoader } from './progressive-loader';

import 'rxjs/add/operator/map';

export class Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) { }

  public makeGETAPICall(url) {
    var loader = new ProgressiveLoader();
    loader.placeLoader('Auth_ss');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(ApiRoot()+url, { headers, withCredentials: true })
      .map(res => {
        loader.removeLoader();
        var x = res.json();
        if (x.error)
          this.router.navigate(['/signin']);
        return x;
      });
  }

  public makePOSTAPICall(url, data) {
    data.append('csrfmiddlewaretoken', this.cookieService.get('csrftoken'));
    var loader = new ProgressiveLoader();
    loader.placeLoader('Auth_ss');
    var headers: Headers = new Headers();
    headers.append('Content-Type', 'text/plain; charset=UTF-8');
    return this.http.post(ApiRoot()+url, (data), { withCredentials: true })
      .map(res => {
        loader.removeLoader();
        var x = res.json();
        if (x.error)
          this.router.navigate(['/signin']);
        return x;
      });
  }

}
