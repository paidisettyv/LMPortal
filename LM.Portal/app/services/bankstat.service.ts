import {BankStat} from '../entities/bankstat';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, HTTP_PROVIDERS, RequestOptions, Request, RequestMethod, URLSearchParams} from 'angular2/http';

export enum DisplayPeriod {
    Day,
    Week,
    Month
}

@Injectable()
export class BankStatService {
    stats$: Observable<BankStat[]>;
    private _bankStatObserver: any;
    private _bankStatDataStore: BankStat[];

    pageCount$: Observable<number>;
    private _pageCountObservable: any;
    private _pageCount: number;
    
    constructor(private _http: Http) {
        //bind our data table observable
        this.stats$ = new Observable(observer => this._bankStatObserver = observer).share();
        this._bankStatDataStore = [];
        //bind our page count observable
        this.pageCount$= new Observable(observer => this._pageCountObservable = observer).share();
        this._pageCount = 0;
    }


    loadStats() {
        this._http.get('http://localhost:64260/api/BankStatistics/1')
            .map(res => res.json())
            .subscribe((data: any) => {
                this._bankStatDataStore = data.BankStatistics;
                this._bankStatObserver.next(this._bankStatDataStore);

                this._pageCount = data.PageCount;
                this._pageCountObservable.next(this._pageCount);
            });
    }

    loadStatsWeekly() {
        this._http.get('http://localhost:64260/api/BankStatistics/7')
            .map(res => res.json())
            .subscribe((data: any) => {
                this._bankStatDataStore = data.BankStatistics;
                this._bankStatObserver.next(this._bankStatDataStore);

                this._pageCount = data.PageCount;
                this._pageCountObservable.next(this._pageCount);
            });
    }

    loadStatsMonthly() {
        this._http.get('http://localhost:64260/api/BankStatistics/30')
            .map(res => res.json())
            .subscribe((data: any) => {
                this._bankStatDataStore = data.BankStatistics;
                this._bankStatObserver.next(this._bankStatDataStore);

                this._pageCount = data.PageCount;
                this._pageCountObservable.next(this._pageCount);
            });
    }

    getPage(pageNum, pageSize, duration) {
        var searchParams = new URLSearchParams();

        searchParams.set('pageNum', pageNum);
        searchParams.set('pageSize', pageSize);

        var options = new RequestOptions({
            search: searchParams
        });

        this._http.get('http://localhost:64260/api/BankStatistics/' + duration, options)
            .map(res => res.json())
            .subscribe((data: any) => {
                this._bankStatDataStore = data.BankStatistics;
                this._bankStatObserver.next(this._bankStatDataStore);

                this._pageCount = data.PageCount;
                this._pageCountObservable.next(this._pageCount);
            });
    }
}