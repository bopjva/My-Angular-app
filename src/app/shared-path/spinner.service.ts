import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spin = new BehaviorSubject<boolean>(false);
  cast = this.spin.asObservable();

  constructor() { }

  loadSpinner(loading: boolean) {
    this.spin.next(loading);
  }
}