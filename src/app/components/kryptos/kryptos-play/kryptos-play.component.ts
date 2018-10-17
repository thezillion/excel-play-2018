import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {CookieService} from 'angular2-cookie/core';

import { Level } from 'src/app/classes/level';
import { KryptosService } from 'src/app/services/kryptos.service';

import { AuthService } from 'src/app/services/auth.service';

import { ApiRoot } from 'src/app/classes/api-root';

@Component({
  selector: 'app-kryptos-play',
  templateUrl: './kryptos-play.component.html',
  styleUrls: ['./kryptos-play.component.css', '../kryptos.component.css']
})
export class KryptosPlayComponent implements OnInit {

  level: any;
  myrank;
  answer: string;
  showError: boolean = false;
  showSuccess: boolean = false;
  apiRoot = ApiRoot();

  constructor(
    private router: Router,
    private kryptosService: KryptosService,
    // private cookieService: CookieService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.showSuccess = false;
      this.loadUserLevel();
      this.loadUserRank();
    } else {
      this.router.navigate(['/signin']);
    }
  }

  loadUserLevel() {
    this.kryptosService.pullUserLevel()
      .subscribe(level => {
        this.level = level;
      });
  }

  loadUserRank() {
    this.kryptosService.pullMyRank()
      .subscribe(myrank => {
        this.myrank = myrank;
      });
  }

  submitAnswer() {
    this.showError = false;
    if (this.answer) {
      this.kryptosService.submitAnswer(this.answer.toLowerCase())
        .subscribe(res => {
          if (res.hasOwnProperty('answer') && res['answer'] == 'Correct') {
            this.answer = '';
            this.showSuccess = true;
            setTimeout(() => {
              this.ngOnInit();
            }, 500);
          } else {
            this.showError = true;
          }
        });
    }
  }


}
