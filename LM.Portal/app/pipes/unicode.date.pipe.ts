﻿// https://en.wikipedia.org/wiki/ISO_8601
// Example
//    Usage: {{ dateValue | unicodeToDate | date:'MM/dd/yyyy' }}
//    Data: 2014-01-05T18:14:18.32
//    Result: 01/05/2014

import {Pipe} from 'angular2/core';

@Pipe({ name: 'unicodeToDate' })
export class UnicodeToDatePipe {
    transform(value: string, args: string[]): any {
        return new Date(value);
    }
}