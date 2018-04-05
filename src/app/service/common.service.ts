import { Injectable } from '@angular/core';
// import { Router, Event, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {
    constructor(private http : HttpClient){
        
    }

    showFullSideBar : boolean = true;
	// Store Application Menus after login and clear after logout
    appMenus : {name : string, path : string}[] = [];

    getData(url) {
        return this.http.get(url);
    }

	// Convert Linear to Multi Level
	getNestedChildren(arr, primKey, ParKey, parent? : any) {
        var out = []
        for(var i in arr) {
            if(arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i])
            }
        }
        return out;
    }
}