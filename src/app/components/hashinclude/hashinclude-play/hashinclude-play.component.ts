import { Component, OnInit, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { CookieService } from "angular2-cookie/services/cookies.service";

import { ApiRoot } from '../../../classes/api-root';

import { HashincludeService } from '../../../services/hashinclude.service';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-hashinclude-play',
  templateUrl: './hashinclude-play.component.html',
  styleUrls: ['./hashinclude-play.component.css', '../hashinclude.component.css']
})
export class HashincludePlayComponent implements OnInit {

  formData: FormData;
  fileOptions = { maxSize: 10 };
  file: UploadFile = null;
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  myrank = null;
  mysub;
  total_submissions;
  showFileSizeError = false;
  submitURL: string = ApiRoot()+'/hashinclude/submitanswer';
  lang: string = "c++";
  langs_allowed_ids = ["c", "c++", "python2", "python3", "java"];
  langs_allowed = ["C", "C++", "Python 2", "Python 3", "Java"];
  pids = {
    "CSTRINGS": 1,
    "PATTERNS": 2,
    "TRAVEL": 3,
    "CANDY": 4,
    "EXARRAYS": 5,
    "CLASSES": 6,
    "GARLAND": 7,
  };

  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private hashincludeService: HashincludeService,
    private router: Router,
    private auth: AuthService
  ) {
    // this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  question: string = null;

  ngOnInit() {

    this.hashincludeService.addHIUser()
      .subscribe(res => {
        var x = res;
      });

    if (this.auth.isAuthenticated()) {
      this.route.params
        .subscribe((params: Params) => {
          if (params['question_id']) {
            this.question = params['question_id'];
          }
        });

      this.getMyRank();
      this.getMySubmissions();
      this.getTotalSubmissions();
    } else {
      this.router.navigate(['/signin']);
    }

  }


  getMyRank() {

    this.hashincludeService.pullMyRank()
      .subscribe(res => {
        this.myrank = res;
      });

  }

  getMySubmissions() {

    this.hashincludeService.pullMySubmissions()
      .subscribe(res => {
        this.mysub = res.sublist;
      });

  }

  getTotalSubmissions() {

    this.hashincludeService.pullTotalSubmissions()
      .subscribe(res => {
        this.total_submissions = res.totalSubmissions;
      });

  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') {
      const event: UploadInput = {
        type: 'uploadAll',
        url: this.submitURL,
        method: 'POST',
        data: { 'csrfmiddlewaretoken': this.cookieService.get('csrftoken'), 'lang': this.lang, 'pid': this.pids[this.question] },
        withCredentials: true
      };

      if (this.file.size <= 100000)
        this.uploadInput.emit(event);
      else {
        this.showFileSizeError = true;
        this.file = null;
      }
    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') {
      this.file = output.file;
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      // const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      // const index = 0;
      // this.files[index] = output.file;
      this.file = output.file;
    } else if (output.type === 'removed') {
      // this.files = this.files.filter((file: UploadFile) => file !== output.file);
      this.file = null;
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadFile',
      url: this.submitURL,
      method: 'POST',
      data: { 'csrfmiddlewaretoken': this.cookieService.get('csrftoken'), 'lang': this.lang, 'pid': this.pids[this.question] },
      withCredentials: true
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

}
