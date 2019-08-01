import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthDbaService} from '../auth/authLogin/auth-dba.service';

@Injectable({
  providedIn: 'root'
})
export class SellerLimitedGuardService implements CanActivate {

  constructor(private auth: AuthDbaService, private router: Router) { }

  canActivate(route,state: RouterStateSnapshot) {
    return this.auth.currentUser.map(user => {
      if (user.promotionType.equal('SELLER_LIMETED')) { return true; }

      this.router.navigate(['/login'],{queryParams:{ returnUrl: state.url}}); // TODO put stateUrl in Navigate Command
      return false;
    });
  }
}
