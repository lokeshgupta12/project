import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

	// Clone the request to add the new header.
	const authReq = req.clone({
	    headers: new HttpHeaders({
	      'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
	    })
	});

	//send the newly created request
	return next.handle(authReq)
		.catch((error, caught) => {
			//intercept the respons error and displace it to the console
			console.log("Error Occurred",error);
			//return the error to the method that called it
			return Observable.throw(error);
		}) as any;
	}
}