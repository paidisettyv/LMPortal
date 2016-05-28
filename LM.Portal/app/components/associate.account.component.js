System.register(['angular2/core', 'angular2/router', '../services/authentication.service', '../services/local.storage.service'], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, local_storage_service_1;
    var AssociateAccountComponent;
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
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            }],
        execute: function() {
            AssociateAccountComponent = (function () {
                function AssociateAccountComponent(_authenticationService) {
                    this._authenticationService = _authenticationService;
                    this.hasSavedSuccessfully = false;
                    this.externalAuthData = this._authenticationService.constructor.externalAuthData;
                }
                AssociateAccountComponent.prototype.registerExternal = function () {
                    var _this = this;
                    this._authenticationService
                        .registerExternal(this.externalAuthData)
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
                        _this.hasSavedSuccessfully = true;
                        _this.message = "Thanks for signing up";
                    }, function (error) {
                        errorMsg = error.json();
                        var errors = [];
                        for (var key in errorMsg.ModelState) {
                            errors.push(errorMsg.ModelState[key]);
                        }
                        _this.message = errors.join(' ');
                    }, function () {
                        //Stub complete method for now
                    });
                };
                AssociateAccountComponent = __decorate([
                    core_1.Component({
                        selector: 'register-component',
                        templateUrl: './app/templates/auth/associate.account.html',
                        providers: [authentication_service_1.AuthenticationService, local_storage_service_1.LocalStorageService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], AssociateAccountComponent);
                return AssociateAccountComponent;
            }());
            exports_1("AssociateAccountComponent", AssociateAccountComponent);
        }
    }
});
//# sourceMappingURL=associate.account.component.js.map