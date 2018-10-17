import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { KryptosComponent } from './components/kryptos/kryptos.component';
import { KryptosPlayComponent } from './components/kryptos/kryptos-play/kryptos-play.component';
import { KryptosRanklistComponent } from './components/kryptos/kryptos-ranklist/kryptos-ranklist.component';
import { KryptosRulesComponent } from './components/kryptos/kryptos-rules/kryptos-rules.component';

import { SigninComponent } from './components/signin/signin.component';
import { CallbackComponent } from './components/callback/callback.component';

export const AppRoutes: Routes = [
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
    ];