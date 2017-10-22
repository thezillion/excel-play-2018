import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Router } from '@angular/router';
import { CookieService } from "angular2-cookie/services/cookies.service";
import { AuthService } from './auth.service';
import { Service } from '../classes/service';

@Injectable()
export class DalalbullService extends Service {

  constructor(
    protected router: Router,
    protected http: Http,
    protected cookieService: CookieService,
    protected auth: AuthService
  ) {
    super(router, http, cookieService, auth);
  }

  addDBUser() {
    return this.makeGETAPICall('/dalalbull/handShake');
  }

  pullTickerData() {
    return this.makeGETAPICall('/dalalbull/ticker');
  }

  pullGraphData() {
    return this.makeGETAPICall('/dalalbull/graph');
  }

  pullUserPortfolio() {
    return this.makeGETAPICall('/dalalbull/portfolio');
  }

  pullCompanyData(symbol: string) {
    let body = new FormData();
    body.append('company', symbol);
    return this.makePOSTAPICall('/dalalbull/companydetails', body);
  }

  buyStock(quantity, company, pending) {
    let body = new FormData();
    body.append('quantity', quantity);
    body.append('b_ss', 'Buy');
    body.append('company', company);
    body.append('pending', pending==null?'':pending);
    return this.makePOSTAPICall('/dalalbull/submit_buy', body);
  }

  shortSellStock(quantity, company, pending) {
    let body = new FormData();
    body.append('quantity', quantity);
    body.append('b_ss', 'Short Sell');
    body.append('company', company);
    body.append('pending', pending==null?'':pending);
    return this.makePOSTAPICall('/dalalbull/submit_buy', body);
  }

  sellOrSCStock(sell_sc, quantity, company, pending) {
    let body = new FormData();
    body.append('quantity', quantity);
    body.append('tradeType', sell_sc=='sell'?'Sell':'Short Cover');
    body.append('company', company);
    body.append('pending', pending==null?'':pending);

    return this.makePOSTAPICall('/dalalbull/submit_sell', body);
  }

  pullBoughtStock() {
    return this.makeGETAPICall('/dalalbull/sell');
  }

  pullTransactionHistory_completed() {
    return this.makeGETAPICall('/dalalbull/history');
  }

  pullTransactionHistory_pending() {
    return this.makeGETAPICall('/dalalbull/pending');
  }

  pullRanklist() {
    return this.makeGETAPICall('/dalalbull/leaderboard');
  }

  pullStockInHand() {
    return this.makeGETAPICall('/dalalbull/sell');
  }

}
