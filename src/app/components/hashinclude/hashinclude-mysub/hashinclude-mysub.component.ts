import { Component, OnInit } from '@angular/core';

import { HashincludeService } from '../../../services/hashinclude.service';

@Component({
  selector: 'app-hashinclude-mysub',
  templateUrl: './hashinclude-mysub.component.html',
  styleUrls: ['./hashinclude-mysub.component.css', '../hashinclude.component.css']
})
export class HashincludeMysubComponent implements OnInit {

  my_submissions;

  languages = {
    "c++": "C++",
    "c": "C",
    "java": "Java",
    "python2": "Python 2",
    "python3": "Python 3"
  };

  problems = [
    "Complex Strings",
    "Patterns",
    "Travel them all",
    "Candy Fight",
    "EXCEL-lent Arrays",
    "Classes in MEC",
    "Garland of Love",
  ];

  constructor(
    private hashincludeService: HashincludeService
  ) { }

  ngOnInit() {
    this.getMySubmissions();
  }

  getMySubmissions() {
    this.hashincludeService.pullAllMySubmissions()
      .subscribe(res => {
        this.my_submissions = res["sublist"];
        this.my_submissions.forEach(ms => {
          ms.time = new Date(ms.time);
        });
      });
  }

}
