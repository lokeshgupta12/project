import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs/Rx';
/*import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';*/

import { CommonService } from '../service/common.service';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {

	constructor(private commonService : CommonService){}

	intercept(req: HttpRequest<any>, next: HttpHandler) {

		const started = Date.now();
	    let ok: string;

		// Clone the request to add the new header.
		const authReq = req.clone({ setHeaders: { 
			'Content-Type': 'application/json',
		    'Access-Control-Allow-Origin':'*',
		    'Authorization' : this.commonService.getAuthToken() || ''
		    } 
		});

		//send the newly created request
		//return next.handle(authReq);
		//console.log(process);
		// extend server response observable with logging
		return next.handle(authReq)
	      .pipe(
	        tap(
	          // Succeeds when there is a response; ignore other events
	          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
	          // Operation failed; error is an HttpErrorResponse
	          error => ok = 'failed'
	        ),
	        // Log when response observable either completes or errors
	        finalize(() => {
	          //const elapsed = Date.now() - started;
	          console.log(`${req.method} "${req.urlWithParams}"
	             ${ok} in ${Date.now() - started} ms.`);
	        })
	      );
	  }
}