import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

//import { CommonService } from '../service/common.service';

@Injectable()

export class LoginResolver implements Resolve<any> {
	
	constructor(/*private commonService : CommonService, */private router : Router) {
		// code...
	}

	resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
		if (!localStorage['auth-token']) 
			return true;
		this.router.navigate(['']);
	}
}