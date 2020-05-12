import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleNgxLoadingBarService {

  private loader = new Subject<boolean>();

  constructor() { }

  getLoader() {
    return this.loader;
  }

  show() {
    this.loader.next(true);
  }

  hide() {
    this.loader.next(false);
  }
}
