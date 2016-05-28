
import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
//import components needed for the dash
import {BankStatsComponent} from '../components/bankstats.component';
import {FlaggedSearchesComponent} from '../components/flagged.searches.component';
import {SearchesByLenderComponent} from '../components/searches.by.lender.component';
import {CompletedSearchesComponent } from '../components/completed.searches.component';
//import components
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'dash',
    templateUrl: './app/templates/dash/admin.html',
    directives: [    ],
    providers: [AuthenticationService]
})
export class AdminComponent { }
