import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Authentication, AuthenticationService, ExternalAuthData} from '../services/authentication.service';
import {Account} from '../entities/account';
import {WindowService} from '../services/window.service';
import {PostMessageService} from '../services/postmessage.service';
import {LocalStorageService} from '../services/local.storage.service';

@Component({
	selector: 'login-component',
    templateUrl: './app/templates/auth/login.html',
    providers: [AuthenticationService, WindowService, PostMessageService, LocalStorageService],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    public account: Account = new Account();
    
    public showPassword: boolean = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _windowService: WindowService,
        private _postMessageService: PostMessageService,
        private _router: Router
    ) {

        this._postMessageService.addPostMessageListener((event) => this.authComplete(event));
    }
	
    login(loginData) {
        this._authenticationService.login(loginData)
            .subscribe(
                data => {
                    if (loginData.useRefreshTokens) {
                        LocalStorageService.setItem('authorizationData', { token: data.access_token, userName: loginData.Email, refreshToken: data.refresh_token, useRefreshTokens: true });
                    } else {
                        LocalStorageService.setItem('authorizationData', { token: data.access_token, userName: loginData.Email, refreshToken: "", useRefreshTokens: false });
                    }
                    this._authenticationService.authentication.isAuthenticated = true;
                    this._authenticationService.authentication.username = loginData.Email;
                    this._authenticationService.authentication.useRefreshTokens = loginData.useRefreshTokens;
                    //LocalStorageService.setItem('authorizationData', authData);

                    this._router.navigate(['Dash']);
            },
                error => this.errorMessage = <any>error
            );
    }

    authExternalProvider(provider: string) {
        var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';

        var apiServiceBaseUri = 'http://localhost:51252';
        var clientId = 'ngAuthApp';

        var externalProviderUrl = apiServiceBaseUri + '/'  +"api/Account/ExternalLogin?provider=" + provider
            + "&response_type=token&client_id=" + clientId
            + "&redirect_uri=" + redirectUri;

        this._windowService.createWindow(externalProviderUrl, "Authenticate Account");
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
        this.showPassword =! this.showPassword;
    }
}