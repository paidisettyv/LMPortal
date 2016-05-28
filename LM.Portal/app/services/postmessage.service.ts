import {Injectable} from "angular2/core";
import {BrowserDomAdapter} from 'angular2/platform/browser';

@Injectable()
export class PostMessageService {
    dom = new BrowserDomAdapter();
    addPostMessageListener(fn: EventListener): void {
        this.dom.getGlobalEventTarget('window').addEventListener('message', fn, false);
    }
}