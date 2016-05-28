import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Http, HTTP_PROVIDERS, RequestOptions, Request, RequestMethod, URLSearchParams, Headers} from 'angular2/http';

@Injectable()
export class CompletedSearchesService {
    constructor(private _http: Http) {

    }

    
}