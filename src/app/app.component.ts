import { Component } from '@angular/core';
import { NgxHttpLoadingBarService } from 'ngx-http-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading-bar-app';

  constructor(private loader: NgxHttpLoadingBarService) { }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }


  start() {
    this.loader.show();
  }

  complete() {
    this.loader.hide();
  }

}
