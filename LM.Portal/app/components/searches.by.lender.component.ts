import {Component, ElementRef} from 'angular2/core';
import {AbstractComponent} from '../abstract.component';
import {UnicodeToDatePipe} from '../pipes/unicode.date.pipe';


@Component({
    selector: 'searches-by-lender',
    templateUrl: './app/templates/dashcomponents/searches.by.lender.html',
    pipes: [UnicodeToDatePipe]
})
export class SearchesByLenderComponent extends AbstractComponent {
    private context: CanvasRenderingContext2D;
    private chart: any;

    constructor(element: ElementRef) {
        super();
        this.title = 'Searches by lender';

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