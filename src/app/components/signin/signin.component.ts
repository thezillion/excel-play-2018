import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isAuth: boolean = true;
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
    if (localStorage.getItem("access_token")) {
      this.isAuth = true;

      var headers = new Headers();
      var access_token = localStorage.getItem("access_token");
      headers.append('Authorization', 'Bearer '+access_token);
      this.http.get('https://excelplay2k17.auth0.com/userinfo', { headers })
        .subscribe(res => {
          var x = res.json();
          this.user.name = x.name;
          this.user.pic = x.picture;
        });
    }
  }

}
