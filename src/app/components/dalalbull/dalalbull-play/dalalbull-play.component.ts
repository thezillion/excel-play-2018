import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';

import { DalalbullService } from '../../../services/dalalbull.service';

import { $WebSocket } from 'angular2-websocket/angular2-websocket';

import { ApiRootHostname_nodir } from '../../../classes/api-root';

import { NgFuseService, NgFuseOptions } from 'ng2-fuse';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { StockMap } from '../../../classes/stock-map';

import { DalalbullStockComponent } from '../dalalbull-stock/dalalbull-stock.component';

import { AuthService } from '../../../services/auth.service';

let myTickerWs = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/dalalbull/ticker-channel/");
let myGraphWs = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/dalalbull/graph-channel/");
let myPortfolioWs = new $WebSocket("ws://"+ApiRootHostname_nodir()+"channel/dalalbull/portfolio-channel/");

@Component({
  selector: 'app-dalalbull-play',
  templateUrl: './dalalbull-play.component.html',
  styleUrls: ['./dalalbull-play.component.css', '../dalalbull.component.css'],
  animations: [
    trigger('blurStatus', [
      state('blur', style({
        filter: 'blur(5px)'
      })),
      state('noblur',   style({
        filter: 'none'
      })),
      transition('noblur => blur', animate('500ms ease-in')),
      transition('blur => noblur', animate('500ms ease-out'))
    ]),
    trigger('visibility', [
      state('invisible', style({
        display: 'none'
      })),
      state('visible',   style({
        display: 'auto'
      })),
      transition('invisible => visible', animate('500ms ease-in')),
      transition('visible => invisible', animate('500ms ease-out'))
    ])
  ]
})
export class DalalbullPlayComponent implements OnInit {

  tickerSymbols = [];
  tickerData;
  userPortfolio;
  searchKeyword: string = "";
  filteredSearchResults: object[] = [];
  blurStatus: string = 'noblur';
  activeStock: string;
  stockVisibility: string = 'invisible';

  @ViewChild(DalalbullStockComponent) child: DalalbullStockComponent;

  public stockMap: StockMap = new StockMap();

  // @ViewChild(BaseChartDirective) chart: BaseChartDirective;
   @ViewChild(BaseChartDirective) chart: BaseChartDirective;
   private fuse: NgFuseService = new NgFuseService();

  constructor(
    private dalalbullService: DalalbullService,
    private auth: AuthService,
    private router: Router
  ) { }

  public lineChartData:Array<any> = [
    {data: [], label: 'Nifty 50'}
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true,
    animation: false
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      this.dalalbullService.addDBUser()
        .subscribe(res => {
          this.getUserPortfolio();
          this.getTickerData();
          this.getGraphData();
        });
    } else {
      this.router.navigate(['/signin']);
    }

  }

  refreshSearchStatus() {
    if (this.searchKeyword) {
      var result = this.fuse.search(this.tickerSymbols, this.searchKeyword);
      this.filteredSearchResults = [];
      result.forEach(r => {
        if (r <= 50) {
          this.filteredSearchResults.push(this.tickerData[r]);
        } else {
          if (result.indexOf(r-51) == -1) {
            this.filteredSearchResults.push(this.tickerData[r-51]);
          }
        }
      });
    } else {
      this.filteredSearchResults = this.tickerData;
    }
  }

  openStockPanel(symbol: string) {
    this.activeStock = null;
    setTimeout(() => {
      this.activeStock = symbol;
      this.stockVisibility = 'visible';
      this.blurStatus = 'blur';
    }, 300);
  }

  getUserPortfolio() {
    this.dalalbullService.pullUserPortfolio()
      .subscribe(res => {
        this.userPortfolio = res;
      });

    myPortfolioWs.onMessage(
      (msg: MessageEvent)=> {
        var data = JSON.parse(msg.data);
        if (!data.accept) {
          this.userPortfolio = {};
          this.userPortfolio.rank = data.rank;
          this.userPortfolio.net_worth = data.net_worth;
          this.userPortfolio.cash_bal = data.cash_bal;
          this.userPortfolio.margin = data.margin;
        }
      },
      {autoApply: false}
    );
  }

  getTickerData() {
    this.dalalbullService.pullTickerData()
      .subscribe(res => {
        this.tickerData = res.tickerData;
        this.tickerSymbols = [];
        this.tickerData.forEach((t) => {
          this.tickerSymbols.push(t.name);
        });
        this.tickerData.forEach((t) => {
          this.tickerSymbols.push(this.stockMap.map[t.name]);
        });
        this.filteredSearchResults = this.tickerData;
      });

    myTickerWs.onMessage(
        (msg: MessageEvent)=> {
          var data = JSON.parse(msg.data);
          if (data.tickerData) {
            // console.log(this.tickerData);
            this.tickerData = [];
            setTimeout(() => {
              this.tickerData = data.tickerData;
              this.filteredSearchResults = this.tickerData;
            }, 5);
          }
        },
        {autoApply: false}
    );
  }

  getGraphData() {
    this.dalalbullService.pullGraphData()
      .subscribe(res => {
        var p = res.graph_data;
        for (let x of p) {
          var y = parseFloat(x[1]);
          this.lineChartData[0].data.push(y);
          this.lineChartLabels.push(x[0]);
        }
        this.chart.ngOnChanges({});
      });

    myGraphWs.onMessage(
        (msg: MessageEvent)=> {
          var data = msg.data;

          if (data.graph_data) {
            var new_data = data.graph_data;
            this.chart.chart.config.data.labels = [];
            this.chart.chart.config.data.datasets[0].data = [];
            this.chart.ngOnChanges({});

            setTimeout(() => {
              this.lineChartLabels.push(new_data[0]);
              this.lineChartData[0].data.push(parseFloat(new_data[1]));
              this.chart.ngOnChanges({});
            }, 5);
          }
        },
        {autoApply: false}
    );
  }

  closePanel() {
    // this.getUserPortfolio();
    this.activeStock = null;
    this.stockVisibility = 'invisible';
    this.blurStatus = 'noblur';
  }

}
