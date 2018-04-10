import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {
	// Store Application Menus after login and clear after logout
	constructor(private http : HttpClient, private router : Router){
        router.events.subscribe( (event: Event) => {
           if (event instanceof NavigationEnd) {
                console.log("val", event) 
            }
        });
    }

    showFullSideBar : boolean = true;
    appMenus : {name : string, path : string}[] = [];

    getLoginData(url) {
        return this.http.get(url);
    }
    getRoutingData() {
        let routingResult = [{pathUrl:"", componentName:"HomeComponent", canActivatedGaurd:[], children: [{path : '', component : "WelcomeComponent"}, {path : 'main', component : "MainSection"}] }]
      return routingResult
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