import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isAuth = true;
  user = {
    name: null,
    pic: null
  };

  constructor(
    public auth: AuthService,
    private http: Http
  ) { }

  ngOnInit() {
    // this.auth.
    if (localStorage.getItem('access_token')) {
      this.isAuth = true;

      const headers = new Headers();
      const access_token = localStorage.getItem('access_token');
      headers.append('Authorization', 'Bearer ' + access_token);
      this.http.get('https://excelplay2018.auth0.com/userinfo', { headers })
        .subscribe(res => {
          const x = res.json();
          this.user.name = x.name;
          this.user.pic = x.picture;
        });
    }
  }

}
