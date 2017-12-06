import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { BasePageComponent } from './components-page/base-page/base-page.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomepageComponent } from './components-page/homepage/homepage.component';
import { ScreenBlocksComponent } from './components-ui/screen-blocks/screen-blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    HomepageComponent,
    ScreenBlocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
