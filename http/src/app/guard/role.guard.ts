import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const expectedRole = route.data.expectedRole;
      const checkRole = (
        this.auth.currentUserSubject$.value &&
        this.auth.currentUserSubject$.value.role
      );

      if (
        !checkRole ||
        this.auth.currentUserSubject$.value!.role! < expectedRole) {
          this.router.navigate(['/forbidden']);
          return false;
        }

      return true;
  }

}
