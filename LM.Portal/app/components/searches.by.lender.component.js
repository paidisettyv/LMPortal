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
    var SearchesByLenderComponent, data;
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
            SearchesByLenderComponent = (function (_super) {
                __extends(SearchesByLenderComponent, _super);
                function SearchesByLenderComponent(element) {
                    _super.call(this);
                    this.title = 'Searches by lender';
                    //get canvas element for chart js
                    this.context = element.nativeElement.querySelector('canvas').getContext('2d');
                }
                SearchesByLenderComponent.prototype.ngAfterContentInit = function () {
                    this.chart = new Chart(this.context).Bar(data);
                };
                SearchesByLenderComponent = __decorate([
                    core_1.Component({
                        selector: 'searches-by-lender',
                        templateUrl: './app/templates/dashcomponents/searches.by.lender.html',
                        pipes: [unicode_date_pipe_1.UnicodeToDatePipe]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SearchesByLenderComponent);
                return SearchesByLenderComponent;
            }(abstract_component_1.AbstractComponent));
            exports_1("SearchesByLenderComponent", SearchesByLenderComponent);
            data = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        }
    }
});
//# sourceMappingURL=searches.by.lender.component.js.map