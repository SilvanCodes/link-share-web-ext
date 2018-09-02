import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MyWebsitesGQL} from '../graphql/generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ls-website-manager',
  templateUrl: './website-manager.component.html',
  styleUrls: ['./website-manager.component.css']
})
export class WebsiteManagerComponent implements OnInit {
  title = 'link-share';
  websites: Observable<any>;

  constructor(websites: MyWebsitesGQL) {
    this.websites = websites.watch().valueChanges.pipe(map(result => result.data.websites));
  }

  ngOnInit() {
  }
}
