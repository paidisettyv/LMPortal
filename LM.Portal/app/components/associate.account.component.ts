///<reference path="../../node_modules/angular2/core.d.ts"/>
import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthenticationService, ExternalAuthData} from '../services/authentication.service';
import {LocalStorageService} from '../services/local.storage.service';

@Component({
    selector: 'register-component',
    templateUrl: './app/templates/auth/associate.account.html',
    providers: [AuthenticationService, LocalStorageService],
    directives: [ROUTER_DIRECTIVES]
})
export class AssociateAccountComponent {
    public externalAuthData: ExternalAuthData;
    public message: string;
    public hasSavedSuccessfully: boolean = false;

    constructor(private _authenticationService: AuthenticationService) {
        this.externalAuthData = this._authenticationService.constructor.externalAuthData;
    }

    registerExternal() {
        this._authenticationService
            .registerExternal(this.externalAuthData)
            .subscribe(
                data => {
                    var authData = {
                        token: data.access_token,
                        userName: data.userName,
                        refreshToken: "",
                        useRefreshTokens: false
                    };

                    this._authenticationService.constructor.authentication.isAuthenticated = true;
                    this._authenticationService.constructor.authentication.username = data.userName;
                    this._authenticationService.constructor.authentication.useRefreshTokens = false;

                    LocalStorageService.setItem('authorizationData', authData);

                    this.hasSavedSuccessfully = true;
                    this.message = "Thanks for signing up";
                }, error => {
                    errorMsg = error.json();

                    var errors = [];
                    for (var key in errorMsg.ModelState) {
                        errors.push(errorMsg.ModelState[key]);
                    }

                    this.message = errors.join(' ');
                },
                () => {
                    //Stub complete method for now
                }
            );
    }
}