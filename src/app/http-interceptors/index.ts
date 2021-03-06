/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SetHeaderInterceptor } from './set-header-interceptor';
// import { CachingInterceptor } from './caching-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
  //{ provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
];
