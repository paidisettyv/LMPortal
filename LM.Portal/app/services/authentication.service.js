System.register(['angular2/core', 'rxjs/add/operator/map', 'angular2/http', '../services/local.storage.service'], function(exports_1, context_1) {
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
    var core_1, http_1, local_storage_service_1;
    var ExternalAuthData, Authentication, AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            }],
        execute: function() {
            //import {Observable} from 'rxjs/rx';
            ExternalAuthData = (function () {
                function ExternalAuthData() {
                    this.Provider = '';
                    this.UserName = '';
                    this.ExternalAccessToken = '';
                }
                ExternalAuthData.prototype.toString = function () {
                    return "Provider=" + this.Provider +
                        "&UserName=" + this.UserName +
                        "&ExternalAccessToken=" + this.ExternalAccessToken;
                };
                return ExternalAuthData;
            }());
            exports_1("ExternalAuthData", ExternalAuthData);
            Authentication = (function () {
                function Authentication() {
                    this.isAuthenticated = false;
                    this.username = '';
                    this.password = '';
                    this.useRefreshTokens = false;
                }
                Authentication.prototype.toString = function () {
                    return "isAuthenticated=" + this.isAuthenticated +
                        "&username=" + this.username +
                        "&password=" + this.password +
                        "&useRefreshToken=" + this.useRefreshTokens;
                };
                return Authentication;
            }());
            exports_1("Authentication", Authentication);
            AuthenticationService = (function () {
                function AuthenticationService(_http) {
                    this._http = _http;
                    this.authentication = new Authentication();
                }
                //saveRegistration(registration) {
                //    this.logOut();
                //    return this._http.post(window.app.config.api.endpointURL + 'api/account/register', registration)
                //        .map(r => r.json());
                //}
                AuthenticationService.prototype.resetPassword = function (password) {
                    var userAccount = {
                        "grant_type": "password",
                        "username": "varun.paidisetty@lendingmetrics.com",
                        "password": password
                    };
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Put,
                        url: window.app.config.api.endpointURL + 'user',
                        headers: headers,
                        body: JSON.stringify(userAccount)
                    });
                    return this._http.request(new http_1.Request(options))
                        .map(function (res) {
                        if (res) {
                            return [{ status: res.status, json: res.json() }];
                        }
                    });
                };
                AuthenticationService.prototype.login = function (loginData) {
                    var loginParams = {
                        "grant_type": "password",
                        "username": loginData.Email,
                        "password": loginData.Password
                    };
                    if (loginData.useRefreshTokens) {
                        loginParams['client_id', window.app.config.clientId];
                    }
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Post,
                        url: window.app.config.api.endpointURL + 'user',
                        headers: headers,
                        body: JSON.stringify(loginParams)
                    });
                    return this._http.request(new http_1.Request(options))
                        .map(function (res) {
                        if (res) {
                            //if res has password expired, 
                            return [{ status: res.status, json: res.json() }];
                        }
                    });
                    //return this._http.post(window.app.config.api.endpointURL + 'user', loginParams, headers)
                    //    .map(r => r.json());
                };
                //handleError(error: Response) {
                //    console.error('Error '+error);
                //    return Observable.throw(error.json().error||'server error')
                //}
                AuthenticationService.prototype.logOut = function () {
                    local_storage_service_1.LocalStorageService.removeItem('authorizationData');
                    AuthenticationService.authentication.isAuthenticated = false;
                    AuthenticationService.authentication.username = '';
                    AuthenticationService.authentication.useRefreshTokens = false;
                };
                AuthenticationService.prototype.fillAuthData = function () {
                    var authData = local_storage_service_1.LocalStorageService.getItem('authorizationData');
                    if (authData) {
                        AuthenticationService.authentication.isAuthenticated = true;
                        AuthenticationService.authentication.username = authData.userName;
                        AuthenticationService.authentication.useRefreshTokens = authData.useRefreshTokens;
                    }
                };
                AuthenticationService.prototype.refreshToken = function () {
                    var authData = local_storage_service_1.LocalStorageService.getItem('authorizationData');
                    if (authData != null) {
                        if (authData.useRefreshTokens) {
                            var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                            var requestBody = {
                                'grant_type': 'refresh_token',
                                'refresh_token': authData.useRefreshToken,
                                'client_id': window.app.clientId
                            };
                            local_storage_service_1.LocalStorageService.removeItem('authorizationData');
                            return this._http.post(window.app.config.api.endpointURL + 'token', requestBody, headers)
                                .map(function (r) { return r.json(); });
                        }
                    }
                };
                AuthenticationService.prototype.obtainAccessToken = function (externalData) {
                    this.logOut();
                    var params = new http_1.URLSearchParams();
                    params.set('provider', externalData.provider);
                    params.set('externalAccessToken', externalData.externalAccessToken);
                    var options = new http_1.RequestOptions({
                        search: params
                    });
                    return this._http.get(window.app.config.api.endpointURL + 'api/account/ObtainLocalAccessToken', options)
                        .map(function (r) { return r.json(); });
                };
                AuthenticationService.prototype.registerExternal = function (registerExternalData) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/x-www-form-urlencoded',
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    var body = registerExternalData.toString();
                    return this._http.post(window.app.config.api.endpointURL + 'api/account/registerexternal', body, options)
                        .map(function (r) { return r.json(); });
                };
                AuthenticationService.externalAuthData = new ExternalAuthData();
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map