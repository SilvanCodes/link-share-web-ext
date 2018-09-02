import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BackgroundComponent} from './background/background.component';
import {GraphQLModule} from './graphql/graphql.module';
import {WebsiteManagerComponent} from './website-manager/website-manager.component';
import {OptionsComponent} from './options/options.component';
import {LoginGuard} from './login.guard';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'options', component: OptionsComponent },
  { path: 'background', component: BackgroundComponent },
  { path: '**', component: WebsiteManagerComponent, canActivate: [LoginGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    OptionsComponent,
    WebsiteManagerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
