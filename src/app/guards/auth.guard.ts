import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CommonService } from '../service/common.service';
/*import { LoginResponse } from '../models/login_response.model';*/

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private commonService : CommonService
        ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            if(this.commonService.appMenus.length)
                return true;
            else {
                return new Promise((resolve)=>{
                    this.commonService.getLoginData('/assets/WSResponses/getLoginDataByToken.json').then((res: {status:string})=>{
                        resolve(true);
                    },()=>{
                        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                        resolve(false);
                    })

                    /*subscribe((data : any)=>{
                        this.commonService.appMenus = this.commonService.getNestedChildren(data.appMenus, "id", "parent");
                        resolve(true);
                    },(err)=>{
                        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                        resolve(false);
                    })*/
                })
            }
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }

    }
}


// interface CanActivate { 
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
// }