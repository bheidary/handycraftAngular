import {Injectable} from '@angular/core';
import {ActivatedRoute, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthDbaService} from '../authLogin/auth-dba.service';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthDbaService, private router: Router) {
  }

  canActivate(route,state: RouterStateSnapshot) {
    return this.auth.currentUser.map(user => {
      if (user) { return true; }

      this.router.navigate(['/login'],{queryParams:{ returnUrl: state.url}});
      return false;
    });
  }


}
