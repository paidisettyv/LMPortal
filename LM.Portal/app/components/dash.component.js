System.register(['angular2/core', '../components/bankstats.component', '../components/flagged.searches.component', '../components/searches.by.lender.component', '../components/completed.searches.component', '../services/authentication.service'], function(exports_1, context_1) {
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
    var core_1, bankstats_component_1, flagged_searches_component_1, searches_by_lender_component_1, completed_searches_component_1, authentication_service_1;
    var DashComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bankstats_component_1_1) {
                bankstats_component_1 = bankstats_component_1_1;
            },
            function (flagged_searches_component_1_1) {
                flagged_searches_component_1 = flagged_searches_component_1_1;
            },
            function (searches_by_lender_component_1_1) {
                searches_by_lender_component_1 = searches_by_lender_component_1_1;
            },
            function (completed_searches_component_1_1) {
                completed_searches_component_1 = completed_searches_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            DashComponent = (function () {
                function DashComponent() {
                }
                DashComponent = __decorate([
                    core_1.Component({
                        selector: 'dash',
                        templateUrl: './app/templates/dash/dash.html',
                        directives: [
                            bankstats_component_1.BankStatsComponent,
                            flagged_searches_component_1.FlaggedSearchesComponent,
                            searches_by_lender_component_1.SearchesByLenderComponent,
                            completed_searches_component_1.CompletedSearchesComponent
                        ],
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashComponent);
                return DashComponent;
            }());
            exports_1("DashComponent", DashComponent);
        }
    }
});
//# sourceMappingURL=dash.component.js.map