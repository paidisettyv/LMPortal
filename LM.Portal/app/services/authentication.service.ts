import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Http, HTTP_PROVIDERS, RequestOptions, Request, RequestMethod, URLSearchParams, Headers,Response} from 'angular2/http';
import {LocalStorageService} from '../services/local.storage.service';
//import {Observable} from 'rxjs/rx';

export class ExternalAuthData {
    Provider: string = '';
    UserName: string = '';
    ExternalAccessToken: string = '';
    toString () : string {
        return "Provider=" + this.Provider +
            "&UserName=" + this.UserName +
            "&ExternalAccessToken=" + this.ExternalAccessToken;
    }
}

export class Authentication {
    isAuthenticated: boolean = false;
    username: string = '';
    password: string = '';
    useRefreshTokens: boolean = false;
    toString(): string {
        return "isAuthenticated=" + this.isAuthenticated +
            "&username=" + this.username +
            "&password=" + this.password +
            "&useRefreshToken=" + this.useRefreshTokens;
    }
}

@Injectable()
export class AuthenticationService {
    public static externalAuthData: ExternalAuthData = new ExternalAuthData();
    public   authentication: Authentication = new Authentication();
    
    
    constructor(private _http: Http) {
        
    }

    //saveRegistration(registration) {
    //    this.logOut();

    //    return this._http.post(window.app.config.api.endpointURL + 'api/account/register', registration)
    //        .map(r => r.json());
    //}
    resetPassword(password) {
        var userAccount = {
            "grant_type": "password",
            "username": "varun.paidisetty@lendingmetrics.com",
            "password": password
        }
        var headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({
            method: RequestMethod.Put,
            url: window.app.config.api.endpointURL + 'user',
            headers: headers,
            body: JSON.stringify(userAccount)
        });
        return this._http.request(new Request(options))
            .map((res: Response) => {
                if (res) { 
                    
                    return [{ status: res.status, json: res.json() }]
                }
            });
    }
    login(loginData) {
        var loginParams = {
            "grant_type": "password",
            "username": loginData.Email,
            "password": loginData.Password
        }

        if (loginData.useRefreshTokens) {
            loginParams['client_id', window.app.config.clientId];
        }

        var headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({
            method: RequestMethod.Post,
            url:window.app.config.api.endpointURL+'user',
            headers: headers,
            body:JSON.stringify(loginParams)
        });
        return this._http.request(new Request(options))
            .map((res: Response) => {
                if (res) { 
                   //if res has password expired, 
                    return [{ status: res.status, json: res.json() }]
                }
            });

        //return this._http.post(window.app.config.api.endpointURL + 'user', loginParams, headers)
        //    .map(r => r.json());
    }
    //handleError(error: Response) {
    //    console.error('Error '+error);
    //    return Observable.throw(error.json().error||'server error')
    //}
    logOut(){
        LocalStorageService.removeItem('authorizationData');

        AuthenticationService.authentication.isAuthenticated = false;
        AuthenticationService.authentication.username = '';
        AuthenticationService.authentication.useRefreshTokens = false;
    }

    fillAuthData(){
        var authData = LocalStorageService.getItem('authorizationData');
        if (authData) {
            AuthenticationService.authentication.isAuthenticated = true;
            AuthenticationService.authentication.username = authData.userName;
            AuthenticationService.authentication.useRefreshTokens = authData.useRefreshTokens;
        }
    }

    refreshToken() {
        var authData = LocalStorageService.getItem('authorizationData');

        if (authData != null) {
            if (authData.useRefreshTokens) {
                var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

                var requestBody = {
                    'grant_type': 'refresh_token',
                    'refresh_token': authData.useRefreshToken,
                    'client_id': window.app.clientId
                }

                LocalStorageService.removeItem('authorizationData');

                return this._http.post(window.app.config.api.endpointURL + 'token', requestBody, headers)
                    .map(r => r.json())
                    //.toPromise()
                    //.then(data => {
                    //    authData = {
                    //        token: data.access_token,
                    //        userName: data.userName,
                    //        refreshToken: "",
                    //        useRefreshTokens: true
                    //    };

                    //    LocalStorageService.setItem('authorizationData', authData);
                    //});
            }
        }
    }

    obtainAccessToken(externalData){
        this.logOut();

        var params = new URLSearchParams();

        params.set('provider', externalData.provider);
        params.set('externalAccessToken', externalData.externalAccessToken);

        var options = new RequestOptions({
            search: params
        });

        return this._http.get(window.app.config.api.endpointURL + 'api/account/ObtainLocalAccessToken', options)
            .map(r => r.json());
    }

    registerExternal(registerExternalData: ExternalAuthData) {
        var headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        });

        var options = new RequestOptions({
            headers: headers
        });

        var body = registerExternalData.toString();

        return this._http.post(window.app.config.api.endpointURL + 'api/account/registerexternal', body, options)
            .map(r => r.json())       
    }
}