System.register(['angular2/core', '../services/bankstat.service', '../pipes/unicode.date.pipe'], function(exports_1, context_1) {
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
    var core_1, bankstat_service_1, unicode_date_pipe_1;
    var BankStatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bankstat_service_1_1) {
                bankstat_service_1 = bankstat_service_1_1;
            },
            function (unicode_date_pipe_1_1) {
                unicode_date_pipe_1 = unicode_date_pipe_1_1;
            }],
        execute: function() {
            BankStatsComponent = (function () {
                function BankStatsComponent(_bankStatService) {
                    this._bankStatService = _bankStatService;
                    this.title = 'Bank statistics';
                    this.currentPage = 1;
                    this.currentPageSize = 10;
                    this.totalResults = 0;
                    this.period = bankstat_service_1.DisplayPeriod.Day;
                }
                BankStatsComponent.prototype.isDisplayedPeriod = function (displayPeriod) {
                    return this.period == displayPeriod;
                };
                BankStatsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._bankStatService.stats$.subscribe(function (bankStats) { return _this.stats = bankStats; });
                    this._bankStatService.pageCount$.subscribe(function (pageCount) { return _this.totalResults = pageCount; });
                    this._bankStatService.loadStats();
                };
                BankStatsComponent.prototype.displayDailyStats = function (event) {
                    event.preventDefault();
                    this.currentPage = 1;
                    this._bankStatService.loadStats();
                    this.period = bankstat_service_1.DisplayPeriod.Day;
                };
                BankStatsComponent.prototype.displayWeeklyStats = function (event) {
                    event.preventDefault();
                    this.currentPage = 1;
                    this._bankStatService.loadStatsWeekly();
                    this.period = bankstat_service_1.DisplayPeriod.Week;
                };
                BankStatsComponent.prototype.displayMonthlyStats = function (event) {
                    event.preventDefault();
                    this.currentPage = 1;
                    this._bankStatService.loadStatsMonthly();
                    this.period = bankstat_service_1.DisplayPeriod.Month;
                };
                BankStatsComponent.prototype.getDurationInDays = function () {
                    var duration = 1;
                    switch (this.period) {
                        case bankstat_service_1.DisplayPeriod.Day:
                            duration = 1;
                            break;
                        case bankstat_service_1.DisplayPeriod.Week:
                            duration = 7;
                            break;
                        case bankstat_service_1.DisplayPeriod.Month:
                            duration = 30;
                            break;
                    }
                    return duration;
                };
                BankStatsComponent.prototype.nextPage = function (event) {
                    event.preventDefault();
                    this.currentPage++;
                    var duration = this.getDurationInDays();
                    this._bankStatService.getPage(this.currentPage, this.currentPageSize, duration);
                };
                BankStatsComponent.prototype.prevPage = function (event) {
                    event.preventDefault();
                    this.currentPage--;
                    var duration = this.getDurationInDays();
                    this._bankStatService.getPage(this.currentPage, this.currentPageSize, duration);
                };
                BankStatsComponent.prototype.displayPage = function (event, pageNum) {
                };
                BankStatsComponent.prototype.isFirstPage = function () {
                    return this.currentPage === 1;
                };
                BankStatsComponent.prototype.isLastPage = function () {
                    return this.totalResults - (this.currentPageSize * this.currentPage) <= 0;
                };
                BankStatsComponent = __decorate([
                    core_1.Component({
                        selector: 'bank-stat',
                        templateUrl: './app/templates/dashcomponents/bankstats.table.html',
                        providers: [bankstat_service_1.BankStatService],
                        pipes: [unicode_date_pipe_1.UnicodeToDatePipe]
                    }), 
                    __metadata('design:paramtypes', [bankstat_service_1.BankStatService])
                ], BankStatsComponent);
                return BankStatsComponent;
            }());
            exports_1("BankStatsComponent", BankStatsComponent);
        }
    }
});
//# sourceMappingURL=bankstats.component.js.map