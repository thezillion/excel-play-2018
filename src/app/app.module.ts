import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgUploaderModule } from 'ngx-uploader';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { KryptosComponent } from './components/kryptos/kryptos.component';
import { DockComponent } from './components/dock/dock.component';
import { HashincludeComponent } from './components/hashinclude/hashinclude.component';
import { DalalbullComponent } from './components/dalalbull/dalalbull.component';
import { EchoComponent } from './components/echo/echo.component';
import { FlummoxComponent } from './components/flummox/flummox.component';
import { ConvolutionComponent } from './components/convolution/convolution.component';
import { SigninComponent } from './components/signin/signin.component';
import { CallbackComponent } from './components/callback/callback.component';

import { KryptosService } from './services/kryptos.service';
import { HashincludeService } from './services/hashinclude.service';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';
import { EchoService } from './services/echo.service';
import { ConvolutionService } from './services/convolution.service';
import { DalalbullService } from './services/dalalbull.service';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { KryptosPlayComponent } from './components/kryptos/kryptos-play/kryptos-play.component';
import { KryptosRanklistComponent } from './components/kryptos/kryptos-ranklist/kryptos-ranklist.component';
import { KryptosRulesComponent } from './components/kryptos/kryptos-rules/kryptos-rules.component';

import { EchoPlayComponent } from './components/echo/echo-play/echo-play.component';
import { EchoRanklistComponent } from './components/echo/echo-ranklist/echo-ranklist.component';
import { EchoRulesComponent } from './components/echo/echo-rules/echo-rules.component';

import { $WebSocket, WebSocketConfig } from 'angular2-websocket/angular2-websocket';
import { HashincludePlayComponent } from './components/hashinclude/hashinclude-play/hashinclude-play.component';
import { HashincludeRulesComponent } from './components/hashinclude/hashinclude-rules/hashinclude-rules.component';
import { HashincludeRanklistComponent } from './components/hashinclude/hashinclude-ranklist/hashinclude-ranklist.component';
import { HashincludeStatusComponent } from './components/hashinclude/hashinclude-status/hashinclude-status.component';
import { HashincludeMysubComponent } from './components/hashinclude/hashinclude-mysub/hashinclude-mysub.component';
import { AboutComponent } from './components/about/about.component';

import { ConvolutionRulesComponent } from './components/convolution/convolution-rules/convolution-rules.component';
import { ConvolutionPlayComponent } from './components/convolution/convolution-play/convolution-play.component';
import { ConvolutionRanklistComponent } from './components/convolution/convolution-ranklist/convolution-ranklist.component';
import { ConvolutionSubmitComponent } from './components/convolution/convolution-submit/convolution-submit.component'

import { DalalbullPlayComponent } from './components/dalalbull/dalalbull-play/dalalbull-play.component';
import { DalalbullRulesComponent } from './components/dalalbull/dalalbull-rules/dalalbull-rules.component';
import { DalalbullRanklistComponent } from './components/dalalbull/dalalbull-ranklist/dalalbull-ranklist.component';
import { DalalbullStockComponent } from './components/dalalbull/dalalbull-stock/dalalbull-stock.component';
import { DalalbullHistoryComponent } from './components/dalalbull/dalalbull-history/dalalbull-history.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'games', children: [
    { path: 'kryptos', component: KryptosComponent, children: [
      { path: '', component: KryptosPlayComponent },
      { path: 'ranklist', component: KryptosRanklistComponent },
      { path: 'rules', component: KryptosRulesComponent }
    ] },
  //   { path: 'hashinclude', component: HashincludeComponent, children: [
  //     { path: '', component: HashincludePlayComponent },
  //     { path: 'ranklist', component: HashincludeRanklistComponent },
  //     { path: 'submissions', component: HashincludeStatusComponent },
  //     { path: 'rules', component: HashincludeRulesComponent },
  //     { path: 'my-submissions', component: HashincludeMysubComponent },
  //     { path: ':question_id', component: HashincludePlayComponent },
  //   ] },
  //   // { path: 'dalalbull', component: DalalbullFakeComponent },
  //   { path: 'dalalbull', component: DalalbullComponent, children: [
  //     { path: '', component: DalalbullPlayComponent },
  //     { path: 'ranklist', component: DalalbullRanklistComponent },
  //     { path: 'rules', component: DalalbullRulesComponent },
  //     { path: 'history', component: DalalbullHistoryComponent },
  //     { path: 'history/:tab', component: DalalbullHistoryComponent },
  //   ] },
  //   { path: 'echo', component: EchoComponent, children: [
  //     { path: '', component: EchoPlayComponent },
  //     { path: 'ranklist', component: EchoRanklistComponent },
  //     { path: 'rules', component: EchoRulesComponent }
  //   ] },
  //   { path: 'flummox', component: FlummoxComponent },
  //   { path: 'convolution', component: ConvolutionComponent , children:[
  //     { path: '', component: ConvolutionPlayComponent },
  //     { path: 'ranklist', component: ConvolutionRanklistComponent},
  //     { path: 'rules', component: ConvolutionRulesComponent},
  //     { path: 'submit' , component: ConvolutionSubmitComponent},
  //   ] }
  ] },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KryptosComponent,
    DockComponent,
    // HashincludeComponent,
    // DalalbullComponent,
    FlummoxComponent,
    // ConvolutionComponent,
    SigninComponent,
    CallbackComponent,
    KryptosRanklistComponent,
    KryptosPlayComponent,
    KryptosRanklistComponent,
    KryptosRulesComponent,
    // HashincludePlayComponent,
    // HashincludeRulesComponent,
    // HashincludeRanklistComponent,
    // HashincludeStatusComponent,
    // HashincludeMysubComponent,
    // EchoComponent,
    // EchoPlayComponent,
    // EchoRulesComponent,
    // EchoRanklistComponent,
    AboutComponent,
    // ConvolutionPlayComponent,
    // ConvolutionRulesComponent,
    // ConvolutionSubmitComponent,
    // ConvolutionRanklistComponent,
    // DalalbullPlayComponent,
    // DalalbullRulesComponent,
    // DalalbullRanklistComponent,
    // DalalbullStockComponent,
    // DalalbullHistoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    ChartsModule,
    HttpModule,
    FormsModule,
    NgUploaderModule,
    AceEditorModule
  ],
  providers: [
    CookieService,
    KryptosService,
    // HashincludeService,
    // EchoService,
    // ConvolutionService,
    AuthService,
    CommonService,
    // DalalbullService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
