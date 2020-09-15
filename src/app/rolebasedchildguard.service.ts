import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './reducer';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({ providedIn: 'root' })
export class RoleBasedChildGuard implements CanActivateChild {
  userDetails: any;
  constructor(private store: Store<AppState>, private router: Router, private loginService: LoginService) {
    this.store.select(state => state.homeState.userDetails).subscribe(res => {
      this.userDetails = res;
    }
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.userDetails.role === 'admin') {
      return true;
    } else {
      this.loginService.loggedOut();
      return this.router.navigate(['/login']);
    }
  }
}