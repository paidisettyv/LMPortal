System.register(['angular2/core', '../services/authentication.service', 'angular2/router', 'angular2/common', '../AdminTools/validators'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1, router_1, common_1, validators_1;
    var ResetPasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            ResetPasswordComponent = (function () {
                function ResetPasswordComponent(_authenticationService, _router, builder) {
                    this._authenticationService = _authenticationService;
                    this._router = _router;
                    this.builder = builder;
                    this.resetPasswordForm = builder.group({
                        password: ['', common_1.Validators.compose([common_1.Validators.required, validators_1.passwordStrength])],
                        confirmPassword: ['', common_1.Validators.required],
                    }, { validator: validators_1.matchingPasswords('password', 'confirmPassword') });
                }
                ResetPasswordComponent.prototype.reset = function (password) {
                    var _this = this;
                    this._authenticationService.resetPassword(password)
                        .subscribe(function (data) {
                        _this._router.navigate(['Dash']);
                    }, function (error) { return _this.errorMessage = error; });
                };
                ResetPasswordComponent = __decorate([
                    core_1.Component({
                        selector: 'reset-password',
                        templateUrl: './app/templates/auth/reset.password.html',
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, common_1.FormBuilder])
                ], ResetPasswordComponent);
                return ResetPasswordComponent;
            }());
            exports_1("ResetPasswordComponent", ResetPasswordComponent);
        }
    }
});
//# sourceMappingURL=reset.password.component.js.map