System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './app.component', './ajax/ajax.auth.options'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, http_1, app_component_1, ajax_auth_options_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (ajax_auth_options_1_1) {
                ajax_auth_options_1 = ajax_auth_options_1_1;
            }],
        execute: function() {
            //import {AjaxExceptionHandler} from './exceptions/ajax.exception.handler';
            //import {AuthenticationService} from './services/authentication.service';
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(http_1.RequestOptions, { useClass: ajax_auth_options_1.AjaxAuthOptions }),
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map