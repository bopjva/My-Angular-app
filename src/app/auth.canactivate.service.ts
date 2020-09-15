import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  loginStatus: boolean;
  constructor(private store: Store<AppState>) {
    this.store.select(state => state.homeState.loginStatus).subscribe(res => {
      this.loginStatus = res;
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('AuthGuard Executed');
    if (this.loginStatus == true) {
      return true;
    } else {
      return false;
    }
  }
}