import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxHttpLoadingBarModule } from 'ngx-http-loading-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHttpLoadingBarModule.forRoot({
      color: 'red'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
