import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {AbstractComponent} from '../abstract.component';
import {UnicodeToDatePipe} from '../pipes/unicode.date.pipe';
import {FlaggedSearch} from '../entities/flagged.search';

@Component({
    selector: 'flagged-searches',
    templateUrl: './app/templates/dashcomponents/flagged.searches.html',
    pipes: [UnicodeToDatePipe]
}) 
export class FlaggedSearchesComponent extends AbstractComponent {
    public flaggedSearchCollection: FlaggedSearch[];

    constructor() {
        super();
        this.title = 'Flagged searches';
        this.flaggedSearchCollection = [
    { SearchID: '8913338321', Date: '2016-01-21T21:30:05.993', Reason: 'A plumber is needed, the network drain is clogged' },
    { SearchID: '7101378968', Date: '2016-01-19T21:30:05.993', Reason: 'Firmware update in the coffee machine' },
    { SearchID: '6863677334', Date: '2016-01-17T21:30:05.993', Reason: 'Forced to support NT servers; sysadmins quit.' },
    { SearchID: '2439182865', Date: '2016-01-15T21:30:05.993', Reason: 'Dew on the telephone lines.' }
];
    }
}

//flaggedSearches = [
  //  { SearchID: '8913338321', date: '2016-01-21T21:30:05.993', Reason: 'A plumber is needed, the network drain is clogged' },
   // { SearchID: '7101378968', date: '2016-01-19T21:30:05.993', Reason: 'Firmware update in the coffee machine' },
   // { SearchID: '6863677334', date: '2016-01-17T21:30:05.993', Reason: 'Forced to support NT servers; sysadmins quit.' },
   // { SearchID: '2439182865', date: '2016-01-15T21:30:05.993', Reason: 'Dew on the telephone lines.' }
//];