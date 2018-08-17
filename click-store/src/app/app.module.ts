import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderSideNavComponent } from './header-side-nav/header-side-nav.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { CatComponent } from './cat/cat.component';
const routes = [
  {
    path: 'category',
    component: CatComponent,
  },
  {
    path: '',
    component: ContentAreaComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderSideNavComponent,
    ContentAreaComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
