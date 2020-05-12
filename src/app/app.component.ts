import { Component } from '@angular/core';
import { NgxLoadingBarService } from 'ngx-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading-bar-app';
  isLoading = false;
  constructor(private loader: NgxLoadingBarService) { }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }


  start() {
    this.isLoading = true;
    this.loader.show();
  }

  complete() {
    this.isLoading = false;
    this.loader.hide();
  }

}
