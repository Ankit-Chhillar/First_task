import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // private authService: AuthService,
    private router: Router, private cookie:CookieService) { }
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {

    let username = this.cookie.get('username');
    let password = this.cookie.get('password');

    var isAuthenticated = false;

    if (username == "ankit" && password == "ankit") {
      isAuthenticated = true;
    }

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}
