import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

import { CookieService } from 'ngx-cookie-service';

import { ApiRoot } from '../classes/api-root';

import { ProgressiveLoader } from '../classes/progressive-loader';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'GuilcIQmL08rvCGrIoKXx4AdnvMNod0i',
    domain: 'excelplay2018.auth0.com',
    responseType: 'token id_token',
    // audience: 'https://excelplay2k18.auth0.com/userinfo',
    redirectUri: 'http://' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '') + '/callback',
    scope: 'openid profile email'
  });

  userCount: number;


  constructor(
    public router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    const csrftoken = this.cookieService.get('csrftoken');
    if (!csrftoken) {
      const loader = new ProgressiveLoader();
      loader.placeLoader('Auth_const');
      this.http.get(ApiRoot() + '/auth/v1/token', { withCredentials: true, observe: 'response' })
        .subscribe(
          res => {
            console.log(res);
            loader.removeLoader();
            // window.location.reload(true);
          }
        );
    }
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        // this.http.get(ApiRoot()+'/testCache')
        //   .subscribe(res => {
        this.setSession(authResult)
          .subscribe(res => {
            this.router.navigate(['/']);
          });
          // });
      } else if (err) {
        this.router.navigate(['/signin']);
      }
    });
  }

  private setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    const body = new FormData();
    const csrftoken = this.cookieService.get('csrftoken');
    // if (csrftoken) {
    body.append('access_token', authResult.accessToken);
    body.append('csrfmiddlewaretoken', csrftoken);
    const loader = new ProgressiveLoader();
    loader.placeLoader('Auth_ss');
    return this.http.post(ApiRoot() + '/auth/v1/signin', body, { withCredentials: true })
      .pipe(map(res => {
        loader.removeLoader();
        // console.log(res.json());
        return res;
      }));
    // }
  }

  public logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    const loader = new ProgressiveLoader();
    loader.placeLoader('Auth_lgt');
    return this.http.get(ApiRoot() + '/auth/v1/signout/', { withCredentials: true })
      .pipe(
        tap(res => {
          loader.removeLoader();
          this.router.navigate(['/signin']);
        })
      );
    // Go back to the home route
    // this.router.navigate(['/signin']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const access_token = localStorage.getItem('access_token');
    return (access_token) && (new Date().getTime() < expiresAt);
  }

  public pullUserCount() {
    const loader = new ProgressiveLoader();
    loader.placeLoader('Auth_puc');
    return this.http.get(ApiRoot() + '/auth/v1/getUserCount', { withCredentials: true })
      .pipe(map(res => {
        loader.removeLoader();
        return res;
      }));
  }


}
