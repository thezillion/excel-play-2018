import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DalalbullService } from '../../../services/dalalbull.service';

import { $WebSocket } from 'angular2-websocket/angular2-websocket';

import { ApiRootHostname_nodir } from '../../../classes/api-root';

let mySellWs = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/dalalbull/sell-channel/");

@Component({
  selector: 'app-dalalbull-stock',
  templateUrl: './dalalbull-stock.component.html',
  styleUrls: ['./dalalbull-stock.component.css'],
})
export class DalalbullStockComponent implements OnInit {

  @Input() cash_available;
  @Input() total_transactions;
  @Input() stock;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  data;
  currentTab: string = 'stock';
  quantity: number = 0;
  base_value:string = "0.00";
  total_value:string = "0.00";
  brokerage:string = "0.00";
  ifPending: boolean = false;
  pending: number = 0;
  successMessage: string = "";
  stock_in_hand;
  disableButtons: boolean = false;
  sell_sc_data;
  current_price: string = "0.00";
  gain: string = "0.00";

  sell_sc_displayable: boolean = false;

  sell_sc_type:string = "sell";

  marketClosed: boolean = false;


  constructor(
    private dalalbullService: DalalbullService
  ) { }

  ngOnInit() {
    if (this.isGoodTime()) {
      this.loadData();
      mySellWs.onMessage(
        (msg: MessageEvent)=> {
          var data = JSON.parse(msg.data);
          if (!data.accept) {
            this.stock_in_hand = data.trans;
            this.stock_in_hand.thisStock = this.stock_in_hand.filter(s => s.company==this.stock);
          }
        },
        {autoApply: false}
      );
    } else {
      this.marketClosed = true;
    }
  }

  isGoodTime(){
    // return true;
    var x = new Date();
    var time = x.getUTCHours()*60 + x.getUTCMinutes();
    var day = x.getDay();
    if( (time>=225 && time<600) && ( day>=1 && day<=5 ) )
      return true;
    return false;
  }

  switchTab(event, newTab) {
    if (this.isGoodTime()) {
      event.preventDefault();
      this.successMessage = "";
      this.currentTab = newTab;
      this.sell_sc_displayable = false;
      if (newTab == 'shares_in_hand') {
        this.dalalbullService.pullStockInHand()
          .subscribe(res => {
            this.stock_in_hand = res.trans;
            this.stock_in_hand.thisStock = this.stock_in_hand.filter(s => s.company==this.stock);
          });
      }
    } else {
      this.marketClosed = true;
    }
  }

  updateTotalValue() {
    var bv = this.data.current_price*this.quantity;
    this.base_value = bv.toFixed(2);
    var brokerage_perc = 0.5;
    if (this.total_transactions > 100 && this.total_transactions < 1000)
      brokerage_perc = 0.5;
    else if (this.total_transactions >= 1000)
      brokerage_perc = 1.5;
    var brk = (brokerage_perc/100)*(this.data.current_price*this.quantity);
    this.brokerage = brk.toFixed(2);
    this.total_value = (bv+brk).toFixed(2);
  }

  show_sell_or_sc(e, sih) {
    e.preventDefault();
    this.sell_sc_displayable = true;
  }

  loadData() {
    if (this.stock && this.isGoodTime()) {
      this.dalalbullService.pullCompanyData(this.stock)
        .subscribe(res => {
          this.data = res;
          this.pending = this.data.current_price;
        });
      this.dalalbullService.pullStockInHand()
        .subscribe(res => {
          this.stock_in_hand = res.trans;
          this.stock_in_hand.thisStock = this.stock_in_hand.filter(s => s.company==this.stock);
        });
    } else {
      window.location.reload(true);
    }
  }

  buyStock() {
    if (this.isGoodTime()) {
      this.successMessage = "";
      if (this.quantity > 0 && parseFloat(this.total_value) <= this.cash_available) {
        var pendingValue = this.ifPending?this.pending:null;
        this.disableButtons = true;
        this.dalalbullService.buyStock(this.quantity, this.stock, pendingValue)
          .subscribe(res => {
            if (res.cclose) {
              this.marketClosed = true;
            } else {
              if (res.message) {
                this.successMessage = res.message;
                this.disableButtons = false;
              }
            }
          });
      }
    } else {
      this.marketClosed = true;
    }
  }

  shortSellStock() {
    if (this.isGoodTime()) {
      this.successMessage = "";
      if (this.quantity > 0 && parseFloat(this.total_value) <= this.cash_available) {
        var pendingValue = this.ifPending?this.pending:null;
        this.disableButtons = true;
        this.dalalbullService.shortSellStock(this.quantity, this.stock, pendingValue)
          .subscribe(res => {
            if (res.cclose) {
              this.marketClosed = true;
            } else {
              if (res.message) {
                this.successMessage = res.message;
                this.disableButtons = false;
              }
            }
          });
      }
    } else {
      this.marketClosed = true;
    }
  }

  sellOrShortCoverStock() {
    if (this.isGoodTime()) {
      this.successMessage = "";
      var pendingValue = this.ifPending?this.pending:null;
      this.disableButtons = true;
      this.dalalbullService.sellOrSCStock(this.sell_sc_type, this.quantity, this.stock, pendingValue)
        .subscribe(res => {
          if (res.cclose) {
            this.marketClosed = true;
          } else {
            if (res.message) {
              this.successMessage = res.message;
              this.disableButtons = false;
              this.stock_in_hand = res.trans;
              this.stock_in_hand.thisStock = this.stock_in_hand.filter(s => s.company==this.stock);
            }
          }
        });
    } else {
      this.marketClosed = true;
    }
  }

}
