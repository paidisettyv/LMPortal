import {HTTP_BINDINGS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {LocalStorageService} from  '../services/local.storage.service';

export class AjaxAuthOptions extends BaseRequestOptions {
    private _authToken: string;

    constructor() {
        super();

        var authData = LocalStorageService.getItem('authorizationData');

        if (authData && authData.token) {
            this._authToken = authData.token;

            this.headers.append('Authorization', 'Bearer ' + this._authToken);
        }
    }
}
