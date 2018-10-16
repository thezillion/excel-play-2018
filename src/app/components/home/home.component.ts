import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('homeState', [
      state('active', style({
        top: '0px'
      })),
      state('inactive',   style({
        top: '1000px'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  homeState: string;
  myrank;

  constructor(
    private commonService: CommonService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.homeState = 'active';
    // this.loadAllRanks();
  }

  deactivateHomeState() {
    this.homeState = 'inactive';
  }

  // loadAllRanks() {
  //   if (this.auth.isAuthenticated()) {
  //     this.commonService.pullMyRanks()
  //       .subscribe(myrank => {
  //         this.myrank = myrank.ranklist;
  //       });
  //   }
  // }

}
