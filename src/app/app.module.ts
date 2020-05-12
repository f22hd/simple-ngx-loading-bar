import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleNgxLoadingBarModule } from 'simple-ngx-loading-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleNgxLoadingBarModule.forRoot({
      color: 'red'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
