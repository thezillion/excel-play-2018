import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DockComponent } from './components/dock/dock.component';

import { KryptosComponent } from './components/kryptos/kryptos.component';
import { KryptosPlayComponent } from './components/kryptos/kryptos-play/kryptos-play.component';
import { KryptosRanklistComponent } from './components/kryptos/kryptos-ranklist/kryptos-ranklist.component';
import { KryptosRulesComponent } from './components/kryptos/kryptos-rules/kryptos-rules.component';

import { SigninComponent } from './components/signin/signin.component';
import { CallbackComponent } from './components/callback/callback.component';

import { KryptosService } from './services/kryptos.service';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DockComponent,
    KryptosComponent,
    KryptosPlayComponent,
    KryptosRanklistComponent,
    KryptosRulesComponent,
    SigninComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      AppRoutes
    ),
  ],
  providers: [
    KryptosService,
    AuthService,
    CommonService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
