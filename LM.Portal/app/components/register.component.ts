import {Component} from 'angular2/core';
import {NgForm, FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Account} from '../entities/account';
import {AuthenticationService} from '../services/authentication.service';
import {WindowService} from '../services/window.service';
import {PostMessageService} from '../services/postmessage.service';
import { emailValidator, matchingEmails } from '../AdminTools/validators';
import {LocalStorageService} from '../services/local.storage.service';

@Component({
    selector: 'register-component',
    templateUrl: './app/templates/auth/register.html',
    providers: [AuthenticationService, WindowService, PostMessageService, LocalStorageService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]   
})


export class RegisterComponent {

    public account: Account = new Account();

    public showPassword: boolean = false;  
   
    registrationForm: ControlGroup;

    constructor(
        private _authenticationService: AuthenticationService,
        private _windowService: WindowService,
        private _postMessageService: PostMessageService,
        private _router: Router,
        private builder: FormBuilder
    ) {

        this._postMessageService.addPostMessageListener((event) => this.authComplete(event));
       
        this.registrationForm = builder.group({
            email: ['', Validators.compose([Validators.required, emailValidator])],
            confirmEmail: ['', Validators.required],
            password: ['', Validators.required]
        }, { validator: matchingEmails('email', 'confirmEmail') });
    }

    register(registerData) {

        this._authenticationService.saveRegistration(registerData)
            .subscribe(
            data => {
                if (registerData.useRefreshTokens) {
                    LocalStorageService.setItem('authorizationData', { token: data.access_token, userName: loginData.Email, refreshToken: data.refresh_token, useRefreshTokens: true });
                } else {
                    LocalStorageService.setItem('authorizationData', { token: data.access_token, userName: loginData.Email, refreshToken: "", useRefreshTokens: false });
                }
                this._authenticationService.constructor.authentication.isAuthenticated = true;
                this._authenticationService.constructor.authentication.username = loginData.Email;
                this._authenticationService.constructor.authentication.useRefreshTokens = loginData.useRefreshTokens;
                //LocalStorageService.setItem('authorizationData', authData);

                this._router.navigate(['Dash']);
            },
                error => this.errorMessage = <any>error
            );
    }

    authComplete(event) {
        var fragment = event.data;

        if (fragment.haslocalaccount == 'False') {
            this._authenticationService.logOut();

            this._authenticationService.constructor.externalAuthData.Provider = fragment.provider;
            this._authenticationService.constructor.externalAuthData.UserName = fragment.external_user_name;
            this._authenticationService.constructor.externalAuthData.ExternalAccessToken = fragment.external_access_token

            this._router.navigate(['AssociateAccount']);
        } else {
            //Obtain access token and redirect to orders
            var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };

            //Obtain access token and redirect to orders
            var externalData = {
                provider: fragment.provider,
                externalAccessToken: fragment.external_access_token
            };

            this._authenticationService.obtainAccessToken(externalData)
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

                    this._router.navigate(['Dash']);
                },
                error => {
                    //TODO: Deal with out error condition
                }
                );
        }
    }
    passType() {
        return this.showPassword ? 'text' : 'password';
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

}