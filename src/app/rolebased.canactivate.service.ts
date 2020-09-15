import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './reducer';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleBasedGuard implements CanActivate {
  userDetails: any;
  constructor(private store: Store<AppState>) {
    this.store.select(state => state.homeState.userDetails).subscribe(res => {
      this.userDetails = res;
    }
    )
  }
  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   console.log("canActivateChild called");
  //   if (this.userDetails.role === 'admin') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userDetails.role == 'admin') {
      return true;
    } else {
      return false;
    }

  }
}