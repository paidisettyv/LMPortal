System.register(['angular2/core', 'rxjs/add/operator/share', 'rxjs/Observable', 'rxjs/add/operator/map', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var DisplayPeriod, BankStatService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            (function (DisplayPeriod) {
                DisplayPeriod[DisplayPeriod["Day"] = 0] = "Day";
                DisplayPeriod[DisplayPeriod["Week"] = 1] = "Week";
                DisplayPeriod[DisplayPeriod["Month"] = 2] = "Month";
            })(DisplayPeriod || (DisplayPeriod = {}));
            exports_1("DisplayPeriod", DisplayPeriod);
            BankStatService = (function () {
                function BankStatService(_http) {
                    var _this = this;
                    this._http = _http;
                    //bind our data table observable
                    this.stats$ = new Observable_1.Observable(function (observer) { return _this._bankStatObserver = observer; }).share();
                    this._bankStatDataStore = [];
                    //bind our page count observable
                    this.pageCount$ = new Observable_1.Observable(function (observer) { return _this._pageCountObservable = observer; }).share();
                    this._pageCount = 0;
                }
                BankStatService.prototype.loadStats = function () {
                    var _this = this;
                    this._http.get('http://localhost:64260/api/BankStatistics/1')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this._bankStatDataStore = data.BankStatistics;
                        _this._bankStatObserver.next(_this._bankStatDataStore);
                        _this._pageCount = data.PageCount;
                        _this._pageCountObservable.next(_this._pageCount);
                    });
                };
                BankStatService.prototype.loadStatsWeekly = function () {
                    var _this = this;
                    this._http.get('http://localhost:64260/api/BankStatistics/7')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this._bankStatDataStore = data.BankStatistics;
                        _this._bankStatObserver.next(_this._bankStatDataStore);
                        _this._pageCount = data.PageCount;
                        _this._pageCountObservable.next(_this._pageCount);
                    });
                };
                BankStatService.prototype.loadStatsMonthly = function () {
                    var _this = this;
                    this._http.get('http://localhost:64260/api/BankStatistics/30')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this._bankStatDataStore = data.BankStatistics;
                        _this._bankStatObserver.next(_this._bankStatDataStore);
                        _this._pageCount = data.PageCount;
                        _this._pageCountObservable.next(_this._pageCount);
                    });
                };
                BankStatService.prototype.getPage = function (pageNum, pageSize, duration) {
                    var _this = this;
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('pageNum', pageNum);
                    searchParams.set('pageSize', pageSize);
                    var options = new http_1.RequestOptions({
                        search: searchParams
                    });
                    this._http.get('http://localhost:64260/api/BankStatistics/' + duration, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this._bankStatDataStore = data.BankStatistics;
                        _this._bankStatObserver.next(_this._bankStatDataStore);
                        _this._pageCount = data.PageCount;
                        _this._pageCountObservable.next(_this._pageCount);
                    });
                };
                BankStatService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BankStatService);
                return BankStatService;
            }());
            exports_1("BankStatService", BankStatService);
        }
    }
});
//# sourceMappingURL=bankstat.service.js.map