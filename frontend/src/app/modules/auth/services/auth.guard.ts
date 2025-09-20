import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authService.user || !this.authService.token){
      this.authService.logout();
      return false;

  }
  let token = this.authService.token;
  let expiration = (JSON.parse(atob(token.split(".")[1]))).exp;
  if(Math.floor(new Date().getTime()/1000) >= expiration){
    this.authService.logout();
    return false;
  }
    return true;
  }
}
  
/* 
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Suponemos que authService.user$ es un BehaviorSubject o Observable del usuario
    return this.authService.user.pipe(
      map(user => {
        const token = this.authService.token; // puede ser BehaviorSubject también
        if (!user || !token) {
          this.authService.logout();
          this.router.navigate(['/login']); // opcional
          return false;
        }

        const expiration = (JSON.parse(atob(token.split('.')[1]))).exp;
        if (Math.floor(new Date().getTime() / 1000) >= expiration) {
          this.authService.logout();
          this.router.navigate(['/login']); // opcional
          return false;
        }

        return true;
      })
    );
  }
}
 */