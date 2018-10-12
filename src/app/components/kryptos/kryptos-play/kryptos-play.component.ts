import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

import { Level } from '../../../classes/level';
import { KryptosService } from '../../../services/kryptos.service';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-kryptos-play',
  templateUrl: './kryptos-play.component.html',
  styleUrls: ['./kryptos-play.component.css', '../kryptos.component.css']
})
export class KryptosPlayComponent implements OnInit {

  level: Level;
  myrank;
  answer: string;
  showError: boolean = false;
  showSuccess: boolean = false;

  constructor(
    private router: Router,
    private kryptosService: KryptosService,
    private cookieService: CookieService,
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
          if (res.valid) {
            this.answer = "";
            this.showSuccess = true;
            setTimeout(() => {
              this.ngOnInit();
            }, 500);
          } else
            this.showError = true;
        });
    }
  }


}
