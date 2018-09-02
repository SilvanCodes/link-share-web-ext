import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewWebsiteGQL} from '../graphql/generated/graphql';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ls-background',
  template: '<h1>Background page for Pinboard</h1>'
})
export class BackgroundComponent implements OnInit, OnDestroy {
  private website: Observable<any>;

  constructor(newWebsite: NewWebsiteGQL) {
    this.website = newWebsite.subscribe();
  }

  ngOnInit() {
    console.log('background alive!');
    // initialize connection to server
    this.website.pipe(
      map(val => {
        console.log(val);
        console.log(val.data.newWebsite.node.url);
        browser.tabs.create({ url: 'http://' + val.data.newWebsite.node.url, active: false });
        }
      )
    ).subscribe();
  }

  ngOnDestroy() {
    console.log('background dead!');
  }
}
