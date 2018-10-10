import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

import { EchoService } from '../../../services/echo.service';

@Component({
  selector: 'app-echo-play',
  templateUrl: './echo-play.component.html',
  styleUrls: ['./echo-play.component.css', '../echo.component.css']
})
export class EchoPlayComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor;
  @ViewChild('commandTextBox') commandTextBox;
  terminalVisible: boolean = false;
  promptVisible: boolean = true;
  level: any = null;
  myrank: any = null;
  showSaved: boolean = false;

  newCommand: string = "";
  commands=[];
  visibleCommands=[];

  tempCommandIndex:number = 0;

  text: string = "#!/bin/bash";

  constructor(
    private echoService: EchoService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.newCommand = "";
    if (!this.auth.isAuthenticated()) {
      this.echoService.addEchoUser()
        .subscribe(res => {
          this.level = res;
          this.text = res.partCode;
          this.loadUserRank();
        });
    } else {
      this.router.navigate(['/signin']);
    }

  }

  loadUserRank() {
    this.echoService.pullMyRank()
      .subscribe(res => {
        this.myrank = res.myrank;
        this.editor.setTheme("chrome");
        this.editor.getEditor().setOptions({
          enableBasicAutocompletion: true,
          newLineMode: "unix"
        });
      });
  }

  terminalize(text) {
    return text.replace(/\n\n/g, '<br/>');
  }

  submitLevel() {
    this.terminalVisible = true;
    this.tempCommandIndex = 0;
    setTimeout(() => {
      this.newCommand = "source code.sh";
      // this.addCommand(true);
      var obj = new CommandTerminal();
      obj.usercommand = this.newCommand;
      obj.output="loading...";
      this.commands.push(obj);
      this.visibleCommands.push(obj);
      this.promptVisible = false;
      this.echoService.submitLevel(this.text)
        .subscribe(res => {
          obj.output = this.terminalize(res.termOut);
          if (res.status == true) {
            obj.output="<br/><br/><b>Success! You have passed this level. Refreshing.. (scroll up)</b>";
            this.ngAfterViewInit();
          } else {
            obj.output="<br/><br/><b>Nope! Wrong answer.</b>";
          }
          this.promptVisible = true;
          this.newCommand = "";
          this.commandTextBox.nativeElement.focus();
        });
    }, 500);
  }

  saveCode() {
    this.echoService.saveCode(this.text)
      .subscribe(res => {
        this.showSaved = true;
        setTimeout(() => this.showSaved = false, 1000);
      });
  }

  addCommand(useEditor) {
    var obj = new CommandTerminal();
    this.tempCommandIndex = 0;
    if (this.newCommand) {
      obj.usercommand = this.newCommand;
      this.promptVisible = false;
      obj.output="loading...";
      this.commands.push(obj);
      this.visibleCommands.push(obj);
      if (!useEditor)
        var finalCommand = obj.usercommand;
      else
        var finalCommand = this.text;
      if (obj.usercommand == 'clear') this.clearTerminal();
      else {
        this.echoService.executeCommand(finalCommand)
          .subscribe(res => {
            obj.output = this.terminalize(res.termOut);
            this.promptVisible = true;
            setTimeout(() => {
              this.commandTextBox.nativeElement.scrollTop = this.commandTextBox.nativeElement.scrollHeight;
              this.commandTextBox.nativeElement.focus();
            }, 200);
          });
      }
      this.newCommand = "";
      this.tempCommandIndex = this.commands.length-1;
    }
  }

  loadPrevCommand(e) {
    e.preventDefault();
    if (this.tempCommandIndex >= 0) {
      this.newCommand = this.commands[this.tempCommandIndex].usercommand;
      if (this.tempCommandIndex > 0)
        this.tempCommandIndex--;
    }
  }

  loadNextCommand(e) {
    e.preventDefault();
    if (this.tempCommandIndex >= -1 && this.tempCommandIndex < this.commands.length-1) {
      this.tempCommandIndex++;
      this.newCommand = this.commands[this.tempCommandIndex].usercommand;
    } else if ((this.tempCommandIndex == this.commands.length-1)) {
      this.newCommand = "";
    }
  }

  clearTerminal() {
    this.visibleCommands = [];
    this.promptVisible = true;
  }

}

class CommandTerminal{
  usercommand: string;
  output : string;
}
