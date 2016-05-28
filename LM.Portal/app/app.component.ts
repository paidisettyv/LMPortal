import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginComponent} from './components/login.component';
import {ResetPasswordComponent} from './components/reset.password.component';
import {RegisterComponent} from './components/register.component';
import {DashComponent} from './components/dash.component';
import {AssociateAccountComponent } from './components/associate.account.component';
import {AuthenticationService} from './services/authentication.service';

@Component({
	selector: 'bank-vision-app',
    templateUrl: './app/templates/structure/bank.vision.app.html',
    providers: [AuthenticationService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/associate-account', name: 'AssociateAccount', component: AssociateAccountComponent },
    { path: '/dash', name: 'Dash', component: DashComponent }
])
export class AppComponent {}