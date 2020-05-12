import { Component } from '@angular/core';
import { SimpleNgxLoadingBarService } from 'simple-ngx-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading-bar-app';
  isLoading = false;
  constructor(private loader: SimpleNgxLoadingBarService) { }

  start() {
    this.isLoading = true;
    this.loader.show();
  }

  complete() {
    this.isLoading = false;
    this.loader.hide();
  }

}
