import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {}
    isAuth: boolean = false;
    
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Promise<boolean | UrlTree> {
            return true;
            if (localStorage.getItem('token')) {
                this.isAuth = true;
            } else {
                this.router.navigate(['/login']);
            }

            return this.isAuth;
    }

}