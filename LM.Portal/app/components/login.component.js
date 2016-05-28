System.register(['angular2/core', 'angular2/router', '../services/authentication.service', '../entities/account', '../services/window.service', '../services/postmessage.service', '../services/local.storage.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, authentication_service_1, account_1, window_service_1, postmessage_service_1, local_storage_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            },
            function (postmessage_service_1_1) {
                postmessage_service_1 = postmessage_service_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_authenticationService, _windowService, _postMessageService, _router) {
                    var _this = this;
                    this._authenticationService = _authenticationService;
                    this._windowService = _windowService;
                    this._postMessageService = _postMessageService;
                    this._router = _router;
                    this.account = new account_1.Account();
                    this.showPassword = false;
                    this._postMessageService.addPostMessageListener(function (event) { return _this.authComplete(event); });
                }
                LoginComponent.prototype.login = function (loginData) {
                    var _this = this;
                    this._authenticationService.login(loginData)
                        .subscribe(function (data) {
                        if (loginData.useRefreshTokens) {
                            local_storage_service_1.LocalStorageService.setItem('authorizationData', { token: data.access_token, userName: loginData.Email, refreshToken: data.refresh_token, useRefreshTokens: true });
                        }
                        else {
                            local_storage_service_1.LocalStorageService.setItem('authorizationData', { token: data.access_token, userName: loginData.Email, refreshToken: "", useRefreshTokens: false });
                        }
                        _this._authenticationService.authentication.isAuthenticated = true;
                        _this._authenticationService.authentication.username = loginData.Email;
                        _this._authenticationService.authentication.useRefreshTokens = loginData.useRefreshTokens;
                        //LocalStorageService.setItem('authorizationData', authData);
                        _this._router.navigate(['Dash']);
                    }, function (error) { return _this.errorMessage = error; });
                };
                LoginComponent.prototype.authExternalProvider = function (provider) {
                    var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';
                    var apiServiceBaseUri = 'http://localhost:51252';
                    var clientId = 'ngAuthApp';
                    var externalProviderUrl = apiServiceBaseUri + '/' + "api/Account/ExternalLogin?provider=" + provider
                        + "&response_type=token&client_id=" + clientId
                        + "&redirect_uri=" + redirectUri;
                    this._windowService.createWindow(externalProviderUrl, "Authenticate Account");
                };
                LoginComponent.prototype.authComplete = function (event) {
                    var _this = this;
                    var fragment = event.data;
                    if (fragment.haslocalaccount == 'False') {
                        this._authenticationService.logOut();
                        this._authenticationService.constructor.externalAuthData.Provider = fragment.provider;
                        this._authenticationService.constructor.externalAuthData.UserName = fragment.external_user_name;
                        this._authenticationService.constructor.externalAuthData.ExternalAccessToken = fragment.external_access_token;
                        this._router.navigate(['AssociateAccount']);
                    }
                    else {
                        //Obtain access token and redirect to orders
                        var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };
                        //Obtain access token and redirect to orders
                        var externalData = {
                            provider: fragment.provider,
                            externalAccessToken: fragment.external_access_token
                        };
                        this._authenticationService.obtainAccessToken(externalData)
                            .subscribe(function (data) {
                            var authData = {
                                token: data.access_token,
                                userName: data.userName,
                                refreshToken: "",
                                useRefreshTokens: false
                            };
                            _this._authenticationService.constructor.authentication.isAuthenticated = true;
                            _this._authenticationService.constructor.authentication.username = data.userName;
                            _this._authenticationService.constructor.authentication.useRefreshTokens = false;
                            local_storage_service_1.LocalStorageService.setItem('authorizationData', authData);
                            _this._router.navigate(['Dash']);
                        }, function (error) {
                            //TODO: Deal with out error condition
                        });
                    }
                };
                LoginComponent.prototype.passType = function () {
                    return this.showPassword ? 'text' : 'password';
                };
                LoginComponent.prototype.toggleShowPassword = function () {
                    this.showPassword = !this.showPassword;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        templateUrl: './app/templates/auth/login.html',
                        providers: [authentication_service_1.AuthenticationService, window_service_1.WindowService, postmessage_service_1.PostMessageService, local_storage_service_1.LocalStorageService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, window_service_1.WindowService, postmessage_service_1.PostMessageService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map