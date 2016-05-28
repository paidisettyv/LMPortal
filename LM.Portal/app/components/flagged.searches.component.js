System.register(['angular2/core', '../abstract.component', '../pipes/unicode.date.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, abstract_component_1, unicode_date_pipe_1;
    var FlaggedSearchesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abstract_component_1_1) {
                abstract_component_1 = abstract_component_1_1;
            },
            function (unicode_date_pipe_1_1) {
                unicode_date_pipe_1 = unicode_date_pipe_1_1;
            }],
        execute: function() {
            FlaggedSearchesComponent = (function (_super) {
                __extends(FlaggedSearchesComponent, _super);
                function FlaggedSearchesComponent() {
                    _super.call(this);
                    this.title = 'Flagged searches';
                    this.flaggedSearchCollection = [
                        { SearchID: '8913338321', Date: '2016-01-21T21:30:05.993', Reason: 'A plumber is needed, the network drain is clogged' },
                        { SearchID: '7101378968', Date: '2016-01-19T21:30:05.993', Reason: 'Firmware update in the coffee machine' },
                        { SearchID: '6863677334', Date: '2016-01-17T21:30:05.993', Reason: 'Forced to support NT servers; sysadmins quit.' },
                        { SearchID: '2439182865', Date: '2016-01-15T21:30:05.993', Reason: 'Dew on the telephone lines.' }
                    ];
                }
                FlaggedSearchesComponent = __decorate([
                    core_1.Component({
                        selector: 'flagged-searches',
                        templateUrl: './app/templates/dashcomponents/flagged.searches.html',
                        pipes: [unicode_date_pipe_1.UnicodeToDatePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlaggedSearchesComponent);
                return FlaggedSearchesComponent;
            }(abstract_component_1.AbstractComponent));
            exports_1("FlaggedSearchesComponent", FlaggedSearchesComponent);
        }
    }
});
//flaggedSearches = [
//  { SearchID: '8913338321', date: '2016-01-21T21:30:05.993', Reason: 'A plumber is needed, the network drain is clogged' },
// { SearchID: '7101378968', date: '2016-01-19T21:30:05.993', Reason: 'Firmware update in the coffee machine' },
// { SearchID: '6863677334', date: '2016-01-17T21:30:05.993', Reason: 'Forced to support NT servers; sysadmins quit.' },
// { SearchID: '2439182865', date: '2016-01-15T21:30:05.993', Reason: 'Dew on the telephone lines.' }
//]; 
//# sourceMappingURL=flagged.searches.component.js.map