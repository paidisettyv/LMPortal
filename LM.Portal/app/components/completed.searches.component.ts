import { Component, ElementRef} from 'angular2/core';
import {AbstractComponent } from '../abstract.component';
import {UnicodeToDatePipe } from '../pipes/unicode.date.pipe';


@Component({
    selector: 'completed-searches',
    templateUrl: './app/templates/dashcomponents/completed.searches.html',
    pipes: [UnicodeToDatePipe]
})
export class CompletedSearchesComponent extends AbstractComponent {
    private context: CanvasRenderingContext2D;
    private chart: any;

    constructor(element: ElementRef) {
        super();
        this.title = 'Completed Searches';

        //get canvas element for chart js
        this.context = element.nativeElement.querySelector('canvas').getContext('2d');
    }

    ngAfterContentInit() {
        this.chart = new Chart(this.context).Bar(data);
    }
}

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
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