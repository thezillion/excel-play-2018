import { Component, OnInit } from '@angular/core';

import { HashincludeService } from '../../services/hashinclude.service';

@Component({
  selector: 'app-hashinclude',
  templateUrl: './hashinclude.component.html',
  styleUrls: ['./hashinclude.component.css']
})
export class HashincludeComponent implements OnInit {

  constructor(
    private hashincludeService: HashincludeService
  ) { }

  ngOnInit() {
    
  }

}
