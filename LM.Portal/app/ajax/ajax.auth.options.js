System.register(['angular2/http', '../services/local.storage.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var http_1, local_storage_service_1;
    var AjaxAuthOptions;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            }],
        execute: function() {
            AjaxAuthOptions = (function (_super) {
                __extends(AjaxAuthOptions, _super);
                function AjaxAuthOptions() {
                    _super.call(this);
                    var authData = local_storage_service_1.LocalStorageService.getItem('authorizationData');
                    if (authData && authData.token) {
                        this._authToken = authData.token;
                        this.headers.append('Authorization', 'Bearer ' + this._authToken);
                    }
                }
                return AjaxAuthOptions;
            }(http_1.BaseRequestOptions));
            exports_1("AjaxAuthOptions", AjaxAuthOptions);
        }
    }
});
//# sourceMappingURL=ajax.auth.options.js.map