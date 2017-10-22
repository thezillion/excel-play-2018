import { Component, OnInit, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { CookieService } from "angular2-cookie/services/cookies.service";

import { ApiRoot } from '../../../classes/api-root';

import { ConvolutionService } from '../../../services/convolution.service';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-convolution-play',
  templateUrl: './convolution-play.component.html',
  styleUrls: ['./convolution-play.component.css', '../convolution.component.css']
})
export class ConvolutionPlayComponent implements OnInit {

  i: number;
  constructor(
    private router: Router,
    private auth: AuthService,
    private convolutionService: ConvolutionService
  )
  {
  	this.i=1;
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.convolutionService.addConvolutionUser()
        .subscribe(res => {
        });
    } else {
      this.router.navigate(['/signin']);
    }
  }

  clicked(n: number)
  {
  	this.i=n;
  }
}
