import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Inject } from '@angular/core';
import { NgxHttpLoadingBarService } from './ngx-http-loading-bar.service';
import { Subscription } from 'rxjs';
import { loadingBarConfigService } from './ngx-loading-bar-config.service';
import { LoadingBar } from './ngx-loading-bar.model';

@Component({
  selector: 'ngx-http-loading-bar',
  templateUrl: './ngx-http-loading-bar.component.html',
  styleUrls: ['./ngx-http-loading-bar.component.css']
})
export class NgxHttpLoadingBarComponent implements OnInit, OnDestroy {

  @ViewChild('loader', { static: false }) loaderEl: ElementRef;
  loadingValue = 0;
  isLoading = false;
  intervalTime = 500; // ms
  intervalId;
  subscription: Subscription;

  constructor(
    private loaderService: NgxHttpLoadingBarService,
    @Inject(loadingBarConfigService) private config: LoadingBar
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.subscription = this.loaderService.getLoader()
      .subscribe(isLoading => {
        if (isLoading) {
          this.startLoading();
        } else {
          this.stopLoading();
        }
      });
  }

  reset() {
    this.loadingValue = 0; // reset
    this.updateElement();
  }

  startLoading() {
    this.loadingValue = 0;
    this.isLoading = true;
    this.intervalId = setInterval(() => {
      this.keepLoading();
    }, this.intervalTime);
  }

  stopLoading() {
    // complete loading line , then clear it
    this.loadingValue = 100;
    this.updateElement();
    setTimeout(() => {
      clearInterval(this.intervalId);
      this.isLoading = false;
    }, this.intervalTime);
  }

  keepLoading() {
    if (this.loadingValue < 95) {
      this.loadingValue += 5;
      this.updateElement();
    }
  }

  updateElement() {
    if (this.loaderEl) {
      this.setupBackgroundColor();
      this.loaderEl.nativeElement.style.width = `${this.loadingValue}%`;
    }
  }

  private setupBackgroundColor() {
    const backgroundColor = this.config.color ? this.config.color : '#333';
    if (this.loaderEl) {
      // check is already assigned or not. no need to reassign , only once.
      if (this.loaderEl.nativeElement.style.background != backgroundColor) {
        this.loaderEl.nativeElement.style.background = backgroundColor;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
