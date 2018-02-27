import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DemoService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

}