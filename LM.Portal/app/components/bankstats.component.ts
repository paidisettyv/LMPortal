import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {BankStat} from '../entities/bankstat';
import {BankStatService, DisplayPeriod} from '../services/bankstat.service';
import {UnicodeToDatePipe} from '../pipes/unicode.date.pipe';

@Component({
    selector: 'bank-stat',
    templateUrl: './app/templates/dashcomponents/bankstats.table.html',
    providers: [BankStatService],
    pipes: [UnicodeToDatePipe]
})
export class BankStatsComponent {
    public title: string = 'Bank statistics';
    public stats: BankStat[];

    public currentPage: number = 1;
    public currentPageSize: number = 10;
    public totalResults: number = 0;
    
    public period = DisplayPeriod.Day;

    constructor(private _bankStatService: BankStatService) {
    }

    isDisplayedPeriod(displayPeriod: DisplayPeriod) {
        return this.period == displayPeriod;
    }

    ngOnInit() {
        this._bankStatService.stats$.subscribe(bankStats => this.stats = bankStats);
        this._bankStatService.pageCount$.subscribe(pageCount => this.totalResults = pageCount);

        this._bankStatService.loadStats();
    }

    displayDailyStats(event) {
        event.preventDefault();

        this.currentPage = 1;
        this._bankStatService.loadStats();
        this.period = DisplayPeriod.Day;
    }

    displayWeeklyStats(event) {
        event.preventDefault();

        this.currentPage = 1;
        this._bankStatService.loadStatsWeekly();
        this.period = DisplayPeriod.Week;
    }

    displayMonthlyStats(event) {
        event.preventDefault();

        this.currentPage = 1;
        this._bankStatService.loadStatsMonthly();
        this.period = DisplayPeriod.Month;
    }

    getDurationInDays() {
        var duration: number = 1;

        switch (this.period) {
            case DisplayPeriod.Day:
                duration = 1;
                break;
            case DisplayPeriod.Week:
                duration = 7;
                break;
            case DisplayPeriod.Month:
                duration = 30;
                break;
        }

        return duration;
    }

    nextPage(event) {
        event.preventDefault();

        this.currentPage++;

        var duration = this.getDurationInDays();

        this._bankStatService.getPage(this.currentPage, this.currentPageSize, duration);
    }

    prevPage(event) {
        event.preventDefault();

        this.currentPage--;

        var duration = this.getDurationInDays();

        this._bankStatService.getPage(this.currentPage, this.currentPageSize, duration)
    }

    displayPage(event, pageNum) {

    }

    isFirstPage() {
        return this.currentPage === 1;
    }

    isLastPage() {
        return this.totalResults - (this.currentPageSize * this.currentPage) <= 0;
    }
}