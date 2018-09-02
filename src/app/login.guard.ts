import {Injectable} from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';

import {Observable} from 'rxjs';

// Guard for the index route of this extension
@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>|boolean {

    const page = route.queryParams['page'];

    if (!page || page === 'popup') {
      // implement authorization to add
      return true;
    }

    this.router.navigate(['/' + page]);
    return false;
  }

}
