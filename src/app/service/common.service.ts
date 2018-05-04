//import { Injectable } from '@angular/core';
//import { MatSnackBar } from '@angular/material';
// import { HttpClient } from '@angular/common/http';
// import { ReusableFunctionsService } from './reusable_functions.service';
// import { LoginResponse } from '../models/login_response.model';
// Mat Snack Bar default configuration



//@Injectable()
export class CommonService {
    constructor(
        // private http : HttpClient,
        // private reusableFunctionsService : ReusableFunctionsService
    ){}

    isSideBarExpand : boolean = true;
    //authToken : string;
	//Store Application Menus after login and clear after logout
    appMenus : {name : string, path : string}[] = [];

    // getLoginData(url) {
    //     return new Promise((resolve, reject)=>{
    //         this.http.get(url).subscribe((data : LoginResponse)=>{
    //             let isSideBarExpand = localStorage.isSideBarExpand;
    //             this.isSideBarExpand = (isSideBarExpand !== undefined) ? JSON.parse(localStorage.isSideBarExpand) : !!data.isSideBarExpand;
    //             this.authToken = data.authToken;
    //             this.appMenus = this.reusableFunctionsService.getNestedChildren(data.appMenus, "controller_id", "parent_controller_id");
    //             resolve({status:'OK', data});
    //         },(err)=>{
    //             reject({status:'KO', data : err});
    //         })
    //     })
    // }

    // Get auth token from localstorage
    getAuthToken = () => localStorage['auth-token'] || '';

    // getRoutingData() {
    //     let routingResult = [{pathUrl:"", componentName:"HomeComponent", canActivatedGaurd:[], children: [{path : '', component : "WelcomeComponent"}, {path : 'main', component : "MainSection"}] }]
    //   return routingResult
    // }
}