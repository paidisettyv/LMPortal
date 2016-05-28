import {bootstrap} from 'angular2/platform/browser';
import {provide, ExceptionHandler} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, RequestOptions} from 'angular2/http';
import {AppComponent} from './app.component';
import {AjaxAuthOptions} from './ajax/ajax.auth.options';
//import {AjaxExceptionHandler} from './exceptions/ajax.exception.handler';
//import {AuthenticationService} from './services/authentication.service';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(RequestOptions, { useClass: AjaxAuthOptions }),
    //provide(ExceptionHandler, { useClass: AjaxExceptionHandler})
]);