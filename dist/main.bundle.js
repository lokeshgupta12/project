webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n\tposition: relative;\r\n\theight: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n -->\r\n<!-- <div class=\"wrapper\">\r\n  <app-header></app-header>\r\n  <app-side-navbar></app-side-navbar>\r\n  <app-main-section></app-main-section>\r\n</div> -->\r\n<div class=\"wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__("./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_header_header_component__ = __webpack_require__("./src/app/home/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_side_navbar_side_navbar_component__ = __webpack_require__("./src/app/home/side-navbar/side-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_main_section_main_section_component__ = __webpack_require__("./src/app/home/main-section/main-section-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_main_section_welcome_welcome_component__ = __webpack_require__("./src/app/home/main-section/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__course_dialog_course_dialog_component__ = __webpack_require__("./src/app/course-dialog/course-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reusable_components_list_list_component__ = __webpack_require__("./src/app/reusable_components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__http_interceptors_index__ = __webpack_require__("./src/app/http-interceptors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_login_resolve__ = __webpack_require__("./src/app/guards/login.resolve.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpModule } from '@angular/http';










/*Demo*/

/*Resuable Components*/




//import { RequestCache, RequestCacheWithMap } from './service/request-cache.service';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_side_navbar_side_navbar_component__["a" /* SideNavbar */],
                __WEBPACK_IMPORTED_MODULE_9__home_main_section_main_section_component__["a" /* MainSection */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_main_section_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__course_dialog_course_dialog_component__["a" /* CourseDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__reusable_components_list_list_component__["a" /* ListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["c" /* TreeModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__http_interceptors_index__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__service_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_19__service_reusable_functions_service__["a" /* ReusableFunctionsService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_login_resolve__["a" /* LoginResolver */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__course_dialog_course_dialog_component__["a" /* CourseDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_login_resolve__ = __webpack_require__("./src/app/guards/login.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_main_section_main_section_component__ = __webpack_require__("./src/app/home/main-section/main-section-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_main_section_welcome_welcome_component__ = __webpack_require__("./src/app/home/main-section/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_main_section_welcome_welcome_component__["a" /* WelcomeComponent */] },
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_6__home_main_section_main_section_component__["a" /* MainSection */] }
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], resolve: __WEBPACK_IMPORTED_MODULE_3__guards_login_resolve__["a" /* LoginResolver */] },
    { path: '**', redirectTo: '' }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/course-dialog/course-dialog.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.mat-form-field {\r\n    display: block;\r\n}\r\n\r\ntextarea {\r\n    height: 100px;\r\n    resize: vertical;\r\n}"

/***/ }),

/***/ "./src/app/course-dialog/course-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2 mat-dialog-title>{{description}}</h2>\r\n\r\n\r\n<mat-dialog-content [formGroup]=\"form\">\r\n\r\n    <mat-form-field>\r\n\r\n        <input matInput\r\n                placeholder=\"Course Description\"\r\n               formControlName=\"description\">\r\n\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n\r\n        <mat-select placeholder=\"Select category\"\r\n            formControlName=\"category\">\r\n\r\n            <mat-option value=\"BEGINNER\">\r\n                Beginner</mat-option>\r\n            <mat-option value=\"INTERMEDIATE\">\r\n                Intermediate</mat-option>\r\n            <mat-option value=\"ADVANCED\">\r\n                Advanced</mat-option>\r\n\r\n        </mat-select>\r\n\r\n    </mat-form-field>\r\n\r\n    <!-- <mat-form-field>\r\n\r\n        <input matInput [matDatepicker]=\"myDatepicker\"\r\n            formControlName=\"releasedAt\">\r\n\r\n        <mat-datepicker-toggle matSuffix\r\n                               [for]=\"myDatepicker\">\r\n\r\n        </mat-datepicker-toggle>\r\n\r\n        <mat-datepicker #myDatepicker></mat-datepicker>\r\n\r\n    </mat-form-field> -->\r\n\r\n    <mat-form-field>\r\n\r\n        <textarea matInput placeholder=\"Description\"\r\n            formControlName=\"longDescription\">\r\n\r\n        </textarea>\r\n\r\n    </mat-form-field>\r\n\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n\r\n    <button class=\"mat-raised-button\"\r\n            (click)=\"close()\">\r\n        Close\r\n    </button>\r\n\r\n    <button class=\"mat-raised-button mat-primary\"\r\n            (click)=\"save()\">\r\n        Save\r\n    </button>\r\n\r\n</mat-dialog-actions>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/course-dialog/course-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// import * as moment from 'moment';
var CourseDialogComponent = /** @class */ (function () {
    function CourseDialogComponent(fb, dialogRef, _a) {
        var description = _a.description, longDescription = _a.longDescription, category = _a.category;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.description = description;
        this.form = fb.group({
            description: [description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            category: [category, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            //releasedAt: [moment(), Validators.required],
            longDescription: [longDescription, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    }
    CourseDialogComponent.prototype.ngOnInit = function () {
    };
    CourseDialogComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    CourseDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CourseDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'course-dialog',
            template: __webpack_require__("./src/app/course-dialog/course-dialog.component.html"),
            styles: [__webpack_require__("./src/app/course-dialog/course-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], CourseDialogComponent);
    return CourseDialogComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*import { LoginResponse } from '../models/login_response.model';*/
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            if (this.commonService.appMenus.length)
                return true;
            else {
                return new Promise(function (resolve) {
                    _this.commonService.getLoginData('/assets/WSResponses/getLoginDataByToken.json').then(function (res) {
                        resolve(true);
                    }, function () {
                        _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                        resolve(false);
                    });
                    /*subscribe((data : any)=>{
                        this.commonService.appMenus = this.commonService.getNestedChildren(data.appMenus, "id", "parent");
                        resolve(true);
                    },(err)=>{
                        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                        resolve(false);
                    })*/
                });
            }
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */]])
    ], AuthGuard);
    return AuthGuard;
}());

// interface CanActivate { 
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
// } 


/***/ }),

/***/ "./src/app/guards/login.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CommonService } from '../service/common.service';
var LoginResolver = /** @class */ (function () {
    function LoginResolver(/*private commonService : CommonService, */ router) {
        this.router = router;
        // code...
    }
    LoginResolver.prototype.resolve = function (route, state) {
        if (!localStorage.getItem('currentUser'))
            return true;
        this.router.navigate(['']);
    };
    LoginResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LoginResolver);
    return LoginResolver;
}());



/***/ }),

/***/ "./src/app/home/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main-header {\r\n    position: relative;\r\n    max-height: 100px;\r\n    z-index:2;\r\n}\r\n.main-header .logo {\r\n    display: block;\r\n    float: left;\r\n    height: 50px;\r\n    font-size: 20px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    width: 230px;\r\n    padding: 0 15px;\r\n    font-weight: 300;\r\n    overflow: hidden;\r\n}\r\n.main-header .navbigation {\r\n    margin-bottom: 0;\r\n    margin-left: 230px;\r\n    border: none;\r\n    min-height: 50px;\r\n    border-radius: 0;\r\n}\r\n.main-header .sidebar-toggle {\r\n    float: left;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    padding: 15px 15px;\r\n    font-family: fontAwesome;\r\n}\r\n.main-header .sidebar-toggle:before {\r\n    content: \"\\f0c9\";\r\n}\r\n.sr-only {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip: rect(0, 0, 0, 0);\r\n    border: 0;\r\n}\r\n.main-header .sidebar-toggle .icon-bar {\r\n    display: none;\r\n}\r\n.main-header .logo {\r\n    background-color: #367fa9;\r\n    color: #fff;\r\n    border-bottom: 0 solid transparent;\r\n}\r\n.main-header .navbigation {\r\n    background-color: #3c8dbc;\r\n}\r\n.main-sidebar{\r\n    background-color: #222d32;\r\n}\r\n.main-header .navbigation .sidebar-toggle {\r\n    color: #fff;\r\n}\r\n.profile {\r\n    float: right; \r\n    margin-right: 15px;\r\n    position: relative;\r\n}\r\na.profilelink {\r\n    position: relative;\r\n    display: block;\r\n    padding: 13px 15px;\r\n    color: #fff;\r\n}\r\na.profilelink:hover{\r\n    background: #367fa9;\r\n}\r\n.user-name{\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -3px;\r\n    font-size: 14px;\r\n}\r\n.user-image {\r\n    float: left;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    margin-top: -2px;\r\n}\r\n.dropdown-menu {\r\n    margin-top: 0;\r\n    border-radius: 0;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n    background: rgba(255, 255, 255, 0.96);\r\n    border: 1px solid #dddddd;\r\n    padding: 0;\r\n    min-width: 120px;\r\n    max-width: 300px;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n    display: block;\r\n    min-width: 160px;\r\n    padding: 5px 0;\r\n    margin: 0;\r\n    font-size: 14px;\r\n    list-style: none;\r\n}\r\n.dropdown-menu > li {\r\n    margin: 0;\r\n}\r\n.dropdown-menu > li > a {\r\n    padding: 10px 5px 10px 5px;\r\n    border-bottom: 1px solid #e2e2e2;\r\n    color: #575757;\r\n    font-size: 12px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    display: block;\r\n    line-height: 1.428571429;\r\n}\r\n.dropdown-menu > li > a:hover{\r\n    background: #f6f6f6;\r\n}\r\n.dropdown-menu > li:last-child > a{\r\n    border-bottom: 0;\r\n}\r\n.dropdown-menu > li > a i {\r\n    margin-right: 10px;\r\n    font-size: 18px;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/home/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <!-- <a routerLink=\"/\" class=\"logo\">New Dashboard</a> -->\r\n  <a routerLink=\"/\" class=\"logo\"><mat-icon>home</mat-icon></a>\r\n  <nav class=\"navbigation navbar-static-top\">\r\n    <!-- <a href=\"javascript:void(0)\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\" (click)='menuToggel()'>\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n    </a> -->\r\n    <div class=\"profile\">\r\n        <a class=\"profilelink\" (click)=\"open = !open\">\r\n            <img src=\"./assets/user.jpg\" class=\"user-image\">\r\n            <span class=\"user-name\">Alexander Pierce</span>\r\n        </a>\r\n        <ul class=\"dropdown-menu\" [ngClass]=\"open ? 'd-block' : 'd-none'\" >\r\n            <li>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-user\"></i> My Account\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-gear\"></i> Account Settings\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/login\" (click)=\"logout()\">\r\n                    <i class=\"fa fa-sign-out\"></i>Logout\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(commonService) {
        this.commonService = commonService;
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.commonService.appMenus = [];
        // clear service of controllers as well.
        // deregister routes too
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/home/header/header.component.html"),
            styles: [__webpack_require__("./src/app/home/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".main-section{\r\n\tmargin-left: 230px;\r\n    -webkit-transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,margin .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n\tbackground-color: #ecf0f5;\r\n    height: calc(100vh - 50px);\r\n    overflow-y: auto;\r\n}\r\n.collapse-menu.main-section{\r\n\tmargin-left: 35px; \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-side-navbar></app-side-navbar>\r\n<section class=\"main-section\" [ngClass]=\"{'collapse-menu':!commonService.isSideBarExpand}\">\r\n\t<router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(commonService) {
        this.commonService = commonService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/main-section/main-section-component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.small.main-section{\r\n\tmargin-left: 50px;\r\n}\r\n\r\n.content {\r\n    padding: 15px;\r\n}\r\n\r\n.content-header {\r\n    position: relative;\r\n    padding: 15px 15px 0 15px;\r\n}\r\n\r\n.content-header>h1 {\r\n    margin: 0;\r\n    font-size: 24px;\r\n}\r\n\r\n.content-header>h1>small {\r\n    font-size: 15px;\r\n    display: inline-block;\r\n    padding-left: 4px;\r\n    font-weight: 300;\r\n}\r\n\r\n.content-header>.breadcrumb {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n    list-style: none;\r\n}\r\n\r\n.breadcrumb>li {\r\n    display: inline-block;\r\n}\r\n\r\n.content-header>.breadcrumb>li>a {\r\n    color: #444;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n}\r\n\r\n.breadcrumb>.active {\r\n    color: #777;\r\n}\r\n\r\n.content-header>.breadcrumb>li+li:before {\r\n    content: '>\\00a0';\r\n}\r\n\r\n.breadcrumb>li+li:before {\r\n    padding: 0 5px;\r\n    color: #ccc;\r\n    content: \"/\\00a0\";\r\n}\r\n\r\n.content-header>.breadcrumb>li>a>.fa {\r\n    margin-right: 5px;\r\n}\r\n\r\n.box {\r\n    position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n            box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n}\r\n\r\n.box-header {\r\n    color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\n.box-header:before, .box-body:before, .box-footer:before, .box-header:after, .box-body:after, .box-footer:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.box-header .box-title {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    line-height: 1;\r\n}\r\n\r\n.box-body {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    padding: 10px;\r\n}\r\n\r\n.margin-top32{\r\n    margin-top: 32px;\r\n}"

/***/ }),

/***/ "./src/app/home/main-section/main-section-component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Name: {{data.name}}\r\n<input type=\"text\" [(ngModel)]=\"data.name\"> -->\r\n<section class=\"content-header\">\r\n  <h1> Data Tables </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a href=\"#\">Tables</a></li>\r\n    <li class=\"active\">Data tables</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"box\">\r\n    <div class=\"box-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Email address</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\r\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n              <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail2\">Email address</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\r\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword2\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\">\r\n              <label class=\"form-check-label\" for=\"exampleCheck2\">Check me out</label>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail3\">Email address</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail3\" placeholder=\"Enter email\">\r\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword3\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" placeholder=\"Password\">\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck3\">\r\n              <label class=\"form-check-label\" for=\"exampleCheck3\">Check me out</label>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </form>\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box\">\r\n    <div class=\"box-body\">\r\n\r\n<div class=\"row\">\r\n      <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label >Search</label>\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n            </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label >Search</label>\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n            </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n          <button type=\"submit\" class=\"btn btn-primary margin-top32\">Submit</button>\r\n      </div>\r\n    </div>\r\n      <table id=\"example2\" class=\"table table-bordered table-hover dataTable\">\r\n        <thead>\r\n          <tr>\r\n            <th>Rendering engine</th>\r\n            <th>Browser</th>\r\n            <th>Platform(s)</th>\r\n            <th>Engine version</th>\r\n            <th>CSS grade</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>Misc</td>\r\n            <td>NetFront 3.4</td>\r\n            <td>Embedded devices</td>\r\n            <td>-</td>\r\n            <td>A</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Misc</td>\r\n            <td>Dillo 0.8</td>\r\n            <td>Embedded devices</td>\r\n            <td>-</td>\r\n            <td>X</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Misc</td>\r\n            <td>Links</td>\r\n            <td>Text only</td>\r\n            <td>-</td>\r\n            <td>X</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Misc</td>\r\n            <td>Lynx</td>\r\n            <td>Text only</td>\r\n            <td>-</td>\r\n            <td>X</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Misc</td>\r\n            <td>IE Mobile</td>\r\n            <td>Windows Mobile 6</td>\r\n            <td>-</td>\r\n            <td>C</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Misc</td>\r\n            <td>PSP browser</td>\r\n            <td>PSP</td>\r\n            <td>-</td>\r\n            <td>C</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Other browsers</td>\r\n            <td>All others</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>U</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <th>Rendering engine</th>\r\n            <th>Browser</th>\r\n            <th>Platform(s)</th>\r\n            <th>Engine version</th>\r\n            <th>CSS grade</th>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/main-section/main-section-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainSection = /** @class */ (function () {
    function MainSection() {
    }
    MainSection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-section',
            template: __webpack_require__("./src/app/home/main-section/main-section-component.html"),
            styles: [__webpack_require__("./src/app/home/main-section/main-section-component.css")]
        })
    ], MainSection);
    return MainSection;
}());



/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialog()\">Pick one</button> -->\r\n<!-- <img src=\"../../../../assets/welcome.jpg\" class=\"img-fluid\">   -->\r\n\r\n<app-list [config]=\"listConfig\" [dataSource]=\"dataSource\" [totalCount]=\"totalCount\" (initialized)=\"onInitializeList($event)\" (onSelect)=\"onSelect($event)\"></app-list>\r\n<hr>\r\n<mat-card *ngFor=\"let course of courses\" class=\"course-card mat-elevation-z10\">\r\n\r\n    <mat-card-header>\r\n\r\n        <mat-card-title>{{course.description}}</mat-card-title>\r\n\r\n    </mat-card-header>\r\n\r\n    <img mat-card-image [src]=\"course.iconUrl\">\r\n\r\n    <mat-card-content>\r\n        <p>{{course.longDescription}}</p>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions class=\"course-actions\">\r\n\r\n        <button mat-button class=\"mat-raised-button mat-primary\" [routerLink]=\"['/courses', course.id]\">\r\n            VIEW COURSE\r\n        </button>\r\n\r\n        <button mat-button class=\"mat-raised-button mat-accent\"\r\n                (click)=\"editCourse(course)\">\r\n            EDIT\r\n        </button>\r\n\r\n    </mat-card-actions>\r\n\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_section_component__ = __webpack_require__("./src/app/home/main-section/main-section-component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(dialog, http) {
        this.dialog = dialog;
        this.http = http;
        this.totalCount = 50;
        this.dataSource = [];
        this.listConfig = {
            columns: [
                { field: 'id', title: 'No.' },
                { field: 'Name' },
                { field: 'Atomic Weight' },
                { field: 'Sym.', notToSort: true },
                { field: 'M.P. (°C)' },
                { field: 'B.P. (°C)' },
                { field: 'Density (g/cm3)' },
                { field: 'Earth crust (%)' },
                { field: 'Discovery (Year)' },
                { field: 'Group' },
                { field: 'Electron configuration' },
                { field: 'Ionization energy (eV)' },
            ],
            sortable: true,
            selectable: true,
            filterable: true,
            pageable: {},
            serverInteraction: true,
            actions: {
                title: 'Actions',
                edit: {
                    editRec: function (data) {
                        console.log("edit", data);
                    },
                },
                delete: {
                    //isDisable : true,
                    deleteRec: function (data) {
                        console.log("edit", data);
                    },
                },
            },
            allowAdd: {
                //tooltip : "Add Record",
                //tooltipPosition : 'below',
                //isDisable : true,
                add: function () {
                    console.log("Add");
                }
            }
        };
        this.courses = [
            {
                id: 1,
                description: "Angular for Beginners",
                iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
                courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
                longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
                category: 'BEGINNER',
                lessonsCount: 10
            },
            {
                id: 2,
                description: 'Angular Security Course - Web Security Fundamentals',
                longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
                courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
                category: 'ADVANCED',
                lessonsCount: 11
            }
        ];
    }
    WelcomeComponent.prototype.onInitializeList = function (event) {
        var _this = this;
        switch (event.eventName) {
            case "initialized":
                console.log("app-list is initialized");
                break;
            case "filterUpdate": {
                console.log("filterUpdate", event.data);
                var queryParams_1 = event.data;
                var filter = queryParams_1.searchValue || '', 
                //sortOrder = queryParams.sortOrder,
                pageNumber = parseInt(queryParams_1.pageNumber) || 0, pageSize = parseInt(queryParams_1.pageSize);
                this.http.get('/assets/WSResponses/periodic-table.json').subscribe(function (data) {
                    if (queryParams_1.searchValue)
                        data = data.filter(function (obj) { return obj.Name.toLowerCase().search(queryParams_1.searchValue.toLowerCase()) >= 0; });
                    if (queryParams_1.sort) {
                        data.sort(function (a, b) {
                            return Number(a[queryParams_1.sort.field] > a[queryParams_1.sort.field]) * (queryParams_1.sort.field === 'asc' ? 1 : -1);
                        });
                    }
                    _this.totalCount = data.length;
                    queryParams_1.limit && (_this.dataSource = data.slice(queryParams_1.offset, queryParams_1.offset + queryParams_1.limit));
                }, function (err) {
                    console.log({ status: 'KO', data: err });
                });
                // setTimeout(() => {
                //     res.status(200).json({payload: lessonsPage});
                // },1000);
                break;
            }
        }
    };
    WelcomeComponent.prototype.onSelect = function (row) {
        console.log('onSelect', row);
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/assets/WSResponses/periodic-table.json').subscribe(function (data) {
            _this.dataSource = data.slice(0, 10);
            _this.totalCount = data.length;
        }, function (err) {
            console.log({ status: 'KO', data: err });
        });
    };
    WelcomeComponent.prototype.editCourse = function (_a) {
        // this.dataSource = [{position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
        //   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
        //   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
        //   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
        //   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
        //   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
        //   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
        //   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
        //   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
        //   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}]
        //this.dataSource[0].position = 150
        // const dialogRef = this.dialog.open(CourseDialogComponent,
        //     {
        //       disableClose : true,
        //       autoFocus: true,
        //       data: {
        //           description, longDescription, category
        //       }
        //     });
        var description = _a.description, longDescription = _a.longDescription, category = _a.category;
        // dialogRef.afterClosed().subscribe(
        //     val => console.log("Dialog output:", val)
        // );
    };
    WelcomeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__main_section_component__["a" /* MainSection */], {
            //width: '100%',
            height: '600px',
            disableClose: true,
            data: {
                name: "Lovelesh",
                animal: "Rabbit"
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/home/main-section/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/home/main-section/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* For Larg Desktop */\r\n.side-navbar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding-top: 50px;\r\n    min-height: 100%;\r\n    width: 230px;\r\n    z-index: 1;\r\n    background-color: #377ea9;\r\n    -webkit-transition: width .3s ease-in-out;\r\n    transition: width .3s ease-in-out;\r\n}\r\n.collapse-menu.side-navbar{\r\n    width: 35px; \r\n}\r\n.menu-holder {\r\n    height: calc(100vh - 118px);\r\n    overflow-y: auto;    \r\n}\r\n.menu-toggle-icon {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: #87bcde;\r\n    text-align: center;\r\n    padding-top: 7px;\r\n}\r\n/*.sidebar-menu{\r\n    white-space: nowrap;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n}\r\n.sidebar-menu a{\r\n\tfont-size: 14px;\r\n    color: #b8c7ce;\r\n}\r\n.sidebar-menu > li {\r\n    position: relative;\r\n}\r\n.sidebar-menu > li > a {\r\n    padding: 0px 5px 0px 15px;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.sidebar-menu > li a .fa{\r\n    width: 20px;\r\n}\r\n.sidebar-menu > li > a {\r\n    border-left: 3px solid transparent;\r\n}\r\n\r\n.sidebar-menu>li:hover > a{\r\n    background: #1e282c;\r\n    color: #fff;\r\n}\r\n.sidebar-menu >li.active > a {\r\n    border-left-color: #3c8dbc;\r\n    color: #fff;\r\n}\r\n\r\n.sidebar-menu > li > a span{\r\n    display: inline-block;\r\n    padding: 12px 5px 12px 0;\r\n    \r\n}\r\n\r\n.sidebar-menu > li:not(.treeview) > a >span {\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.sidebar-menu > li > a span.pull-right-container {\r\n    float: right;\r\n    margin-top: 4px;\r\n}\r\n.sidebar-menu li > a > .pull-right-container > .fa-angle-left {\r\n    width: auto;\r\n    height: auto;\r\n    padding: 0;\r\n    margin-right: 10px;\r\n}\r\n.treeview-menu {\r\n    display: none;\r\n    background: #2c3b41;\r\n    margin: 0;\r\n    padding-left: 5px;\r\n}\r\n.sidebar-menu >li.active .treeview-menu {\r\n    display: block;\r\n}\r\n.treeview-menu > li > a {\r\n    padding: 5px 5px 8px 15px;\r\n    display: block;\r\n}\r\n.treeview-menu li:hover a{\r\n    color: #fff;\r\n}\r\n.sidebar-menu > li:hover > a .fa-angle-left{\r\n    transform: rotate(-90deg);\r\n}*/\r\n/* For Small Desktop */\r\n/*.small .sidebar-menu >li.active .treeview-menu {\r\n    display: none;\r\n}\r\n.small.side-navbar {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding-top: 50px;\r\n    min-height: 100%;\r\n    width: 50px;\r\n    z-index: 1;\r\n    background-color: #222d32;\r\n    \r\n}\r\n.small .sidebar-menu > li > a {\r\n    padding: 12px 5px 12px 15px;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.small .sidebar-menu > li > a span{\r\n    display: none;\r\n}\r\n\r\n.small .sidebar-menu > li:hover > a span{\r\n    display: block;\r\n    position: absolute;\r\n    width: 180px;\r\n    left: 50px;\r\n    border-top-right-radius: 4px;\r\n    top: 4px;\r\n    margin-left: -3px;\r\n    padding: 12px 5px 12px 20px;\r\n    background-color: #1e282c;\r\n}\r\n.small .sidebar-menu > li:hover > a span.pull-right-container {\r\n    position: relative;\r\n    float: right;\r\n    width: auto;\r\n    left: 180px;\r\n    top: -30px;\r\n    z-index: 3;\r\n}\r\n.small .treeview-menu {\r\n    display: none;\r\n    list-style: none;\r\n    padding: 5px 0;\r\n    margin: 0;\r\n    padding-left: 5px;\r\n    border-bottom-right-radius: 4px;\r\n    background: #2c3b41;\r\n}\r\n.small .sidebar-menu>li:hover .treeview-menu{\r\n    display: block;\r\n    position: absolute;\r\n    width: 180px;\r\n    left: 50px;\r\n} */\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-navbar\" [ngClass]=\"{'collapse-menu':!commonService.isSideBarExpand}\">\r\n    <input style=\"width: 100%;\" [hidden]=\"!commonService.isSideBarExpand\" id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"Search menus\"/>\r\n    <div class=\"menu-holder\">\r\n        <tree-root [nodes]=\"nodes\" [focused]=\"true\" [(state)]=\"state\" #tree [options]=\"options\" (initialized)=\"treeRootEvent($event)\">\r\n          <ng-template #treeNodeTemplate let-node let-index=\"index\">\r\n            <span [hidden]=\"!commonService.isSideBarExpand\">\r\n                <mat-icon>{{node.data.iconName}}</mat-icon>\r\n                {{node.data.name}}\r\n            </span>\r\n            <div [hidden]=\"commonService.isSideBarExpand\">\r\n                <span matTooltip=\"{{node.data.name}}\" matTooltipPosition=\"after\"><mat-icon>{{node.data.iconName}}</mat-icon></span>    \r\n            </div>\r\n          </ng-template>\r\n        </tree-root>\r\n    </div>\r\n    <div class=\"menu-toggle-icon\">\r\n        <a href=\"javascript:void(0)\" \r\n        (click)=\"commonService.isSideBarExpand=!commonService.isSideBarExpand;menuToggle()\" class=\"material-icons\">{{commonService.isSideBarExpand ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}}</a>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__ = __webpack_require__("./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavbar = /** @class */ (function () {
    function SideNavbar(commonService, router) {
        var _this = this;
        this.commonService = commonService;
        this.router = router;
        this.treeInitializeFlag = false;
        this.currentRoute = '';
        this.needToCollapseAfterNavigate = false;
        // Provide Menu Array to tree component
        this.nodes = this.commonService.appMenus;
        // Provide options Object to tree component
        this.options = {
            //    displayField: 'nodeName',
            //    isExpandedField: 'expanded',
            idField: 'controller_id',
            //    hasChildrenField: 'nodes',
            //    nodeHeight: 1,
            //    allowDrag: (node) => {
            //      return true;
            //    },
            //    allowDrop: (node) => {
            //      return true;
            //    },
            //    useVirtualScroll: true,
            //    animateExpand: true,
            //    scrollOnActivate: true,
            //    animateSpeed: 30,
            //    animateAcceleration: 1.2,
            actionMapping: {
                mouse: {
                    // contextMenu: (tree, node, $event) => {
                    //   $event.preventDefault();
                    //   alert(`context menu for ${node.data.name}`);
                    // },
                    // dblClick: (tree, node, $event) => {
                    //   if (node.hasChildren) {
                    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                    //   }
                    // },
                    // dblClick: (tree, node, $event) => {
                    //   if (node.hasChildren) {
                    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                    //   }
                    // },
                    click: function (tree, node, $event) {
                        //tree.collapseAll();
                        //$event.preventDefault();
                        if (node.hasChildren) {
                            __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
                            if (!_this.commonService.isSideBarExpand) {
                                _this.commonService.isSideBarExpand = true;
                                _this.needToCollapseAfterNavigate = true;
                            }
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].ACTIVATE(tree, node, $event);
                            _this.router.navigate([node.data.route]);
                            if (_this.needToCollapseAfterNavigate) {
                                _this.commonService.isSideBarExpand = false;
                                _this.menuToggle();
                            }
                        }
                        // $event.shiftKey
                        //   ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
                        //   : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
                    }
                },
                keys: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["a" /* KEYS */].ENTER] = function (tree, node, $event) {
                        if (!node.hasChildren)
                            _this.router.navigate([node.data.route]);
                        //alert(`This is ${node.data.name}`)
                    },
                    _a)
            }
        };
        // Call on route change
        this.routerSubscriber = router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // Save current route in currentRoute var
                _this.currentRoute = event.urlAfterRedirects.replace('/', '');
                _this.treeInitializeFlag && _this.collapseAndSetActiveNode();
            }
        });
        var _a;
    }
    // Unsubscribe routerSubscriber
    SideNavbar.prototype.ngOnDestroy = function () {
        this.routerSubscriber.unsubscribe();
    };
    // Collapse All node and set active node
    SideNavbar.prototype.collapseAndSetActiveNode = function () {
        var _this = this;
        this.treeRef.treeModel.collapseAll();
        setTimeout(function () {
            // this.treeRef.treeModel.getNodeById(node.data.id);
            _this.commonService.isSideBarExpand && _this.treeRef.treeModel.getNodeBy(function (node) { return node.data.route === _this.currentRoute; }).setActiveAndVisible();
        }, 0);
    };
    // On collapse Menu collapse all node otherwise 
    SideNavbar.prototype.menuToggle = function () {
        this.needToCollapseAfterNavigate = false;
        this.commonService.isSideBarExpand ? this.collapseAndSetActiveNode() : this.treeRef.treeModel.collapseAll();
        // userPre
    };
    Object.defineProperty(SideNavbar.prototype, "state", {
        // Get State of tree
        get: function () {
            return localStorage.treeState && JSON.parse(localStorage.treeState);
        },
        // Set State of tree
        set: function (state) {
            localStorage.treeState = JSON.stringify(state);
        },
        enumerable: true,
        configurable: true
    });
    // Call On initialization of tree component
    SideNavbar.prototype.treeRootEvent = function (data) {
        switch (data.eventName) {
            case "initialized": {
                this.treeInitializeFlag = true;
                var selectedNode = data.treeModel.getActiveNode();
                if (selectedNode)
                    this.router.navigate([selectedNode.data.route]);
                else if (this.currentRoute)
                    this.collapseAndSetActiveNode();
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('tree'),
        __metadata("design:type", Object)
    ], SideNavbar.prototype, "treeRef", void 0);
    SideNavbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-side-navbar",
            template: __webpack_require__("./src/app/home/side-navbar/side-navbar.component.html"),
            styles: [__webpack_require__("./src/app/home/side-navbar/side-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SideNavbar);
    return SideNavbar;
}());

// nodes
// hasChildren: For async data load. Denotes that this node might have children, even when 'children' attr is empty.
// isExpanded: Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.


/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set_header_interceptor__ = __webpack_require__("./src/app/http-interceptors/set-header-interceptor.ts");
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__set_header_interceptor__["a" /* SetHeaderInterceptor */], multi: true },
];


/***/ }),

/***/ "./src/app/http-interceptors/set-header-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs/Rx';
/*import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';*/

var SetHeaderInterceptor = /** @class */ (function () {
    function SetHeaderInterceptor(commonService) {
        this.commonService = commonService;
    }
    SetHeaderInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        var ok;
        // Clone the request to add the new header.
        var authReq = req.clone({ setHeaders: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': this.commonService.getAuthToken() || ''
            }
        });
        //send the newly created request
        //return next.handle(authReq);
        //console.log(process);
        // extend server response observable with logging
        return next.handle(authReq)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(
        // Succeeds when there is a response; ignore other events
        function (event) { return ok = event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */] ? 'succeeded' : ''; }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) { return ok = 'failed'; }), 
        // Log when response observable either completes or errors
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* finalize */])(function () {
            //const elapsed = Date.now() - started;
            console.log(req.method + " \"" + req.urlWithParams + "\"\n\t             " + ok + " in " + (Date.now() - started) + " ms.");
        }));
    };
    SetHeaderInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */]])
    ], SetHeaderInterceptor);
    return SetHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login{\r\n    width: 500px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -159px;\r\n    margin-left: -250px;\r\n\r\n}\r\n\r\n\r\n.panel {\r\n    background-color: #fff;\r\n    border: 1px solid #bce8f1;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n\r\n\r\n.panel-heading {\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid #bce8f1;\r\n    border-top-right-radius: 3px;\r\n    border-top-left-radius: 3px;\r\n    color: #31708f;\r\n    background-color: #d9edf7;\r\n}\r\n\r\n\r\n.panel-title {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n    color: inherit;\r\n}\r\n\r\n\r\n.forgot {\r\n    float: right;\r\n    font-size: 12px;\r\n    position: relative;\r\n    top: -10px;\r\n}\r\n\r\n\r\n.forgot a{\r\n    color: #31708f;\r\n}\r\n\r\n\r\n.panel-body {\r\n    padding: 15px;\r\n    padding-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\r\n  <li *ngFor=\"let user of demousers\">{{ user.email }}</li>\r\n</ul> -->\r\n<div class=\"login\">\r\n    <div class=\"panel panel-info\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Sign In</div>\r\n        <div class=\"forgot\"><a href=\"#\">Forgot password?</a></div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n    <form  (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" ngModel #email=\"ngModel\" required email />\r\n            <div *ngIf=\"email.errors && email.touched\">\r\n\t            <span *ngIf=\"email.errors.required\" class=\"redItalic\">Email required.</span>\r\n\t            <span *ngIf=\"!email.errors.required && email.errors.email\" class=\"redItalic\">Email not valid.</span>\r\n            </div>\r\n            <!-- <div *ngIf=\"(email.touched && !email.valid) || (f.submitted && !email.valid)\" class=\"help-block\">Email is required</div> -->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #password=\"ngModel\" required minlength=\"6\" maxlength=\"15\" />\r\n            <div *ngIf=\"password.errors && password.touched\">\r\n\t            <span *ngIf=\"password.errors.required\" class=\"redItalic\">Password required.</span>\r\n\t            <span *ngIf=\"!password.errors.required && (password.errors.minlength || password.errors.maxlength)\" class=\"redItalic\">Password length must be in between of 6 and 15.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading || !f.valid\" class=\"btn btn-success\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        </div>\r\n    </form>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DemoService } from '../demo.service';


//import { AlertService, AuthenticationService } from '../_services/index';
var LoginComponent = /** @class */ (function () {
    //demousers : Array<any>;
    function LoginComponent(route, router, commonService, http, reusableFunctionsService /*,
        private demoService : DemoService*/
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
    ) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this.http = http;
        this.reusableFunctionsService = reusableFunctionsService; /*,
        private demoService : DemoService*/
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (localStorage.getItem('currentUser')) {
            (this.returnUrl === "login") && (this.returnUrl = '/');
            this.router.navigate([this.returnUrl]);
        }
        // Access the Data Service's getUsers() method we defined
        // this.demoService.getUsers()
        //     .subscribe(res => this.demousers = res);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.commonService.getLoginData('/assets/WSResponses/getLoginDataByMailAndPwd.json').then(function (res) {
            _this.loading = false;
            localStorage.setItem('currentUser', res.data.email);
            _this.router.navigate([_this.returnUrl]);
        }, function (err) {
            _this.loading = false;
            console.log(err);
        });
        /*this.http.post('http://localhost:3000/login', {"name":this.loginForm.value.email, "password" : this.loginForm.value.password}).subscribe((data : any) => {
            this.loading = false;
            localStorage.setItem('currentUser',this.loginForm.value.email);
            this.commonService.appMenus = this.reusableFunctionsService.getNestedChildren(data.appMenus, "controller_id", "parent_controller_id");
            this.router.navigate([this.returnUrl]);
        });*/
        //this.authenticationService.login(this.model.username, this.model.password)
        // .subscribe(
        //     data => {
        //         this.router.navigate([this.returnUrl]);
        //     },
        //     error => {
        //         this.alertService.error(error);
        //         this.loading = false;
        //     });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__service_reusable_functions_service__["a" /* ReusableFunctionsService */] /*,
            private demoService : DemoService*/
            //private authenticationService: AuthenticationService,
            //private alertService: AlertService
        ])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["L" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/reusable_components/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n.spinner-container {\r\n    height: 360px;\r\n    width: 390px;\r\n    position: fixed;\r\n}\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n.main-fab {\r\n  position:absolute;\r\n}\r\n.remove-padding {\r\n  padding: 0rem 0rem;\r\n  color: inherit;\r\n}\r\n.mat-header-cell.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n.mat-header-row {\r\n    min-height: 40px;\r\n}\r\n.mat-row {\r\n    min-height: 46px;\r\n}\r\nmat-row:nth-child(even){\r\n  background-color:white;\r\n}\r\nmat-row:nth-child(odd){\r\n  background-color:#cccccc54;\r\n}\r\nmat-row.highlight{\r\n  background-color: #42A948; /* green */\r\n}\r\n.mat-fab {\r\n  width: 40px;\r\n  height: 40px;\r\n  outline: none;\r\n  opacity: 0.83;\r\n}\r\n/*.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}*/\r\n"

/***/ }),

/***/ "./src/app/reusable_components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <!-- Search Division -->\r\n\t<div *ngIf=\"config.filterable\" class=\"example-header\">\r\n\t    <mat-form-field>\r\n\t      <input matInput (input)=\"config.serverInteraction || applyFilter($event.target.value)\" placeholder=\"Filter\" #searchInput>\r\n\t    </mat-form-field>\r\n\t</div>\r\n  <!-- Add Button Division -->\r\n  <div *ngIf=\"config.allowAdd\" id=\"Normal\" class=\"main-fab\">\r\n      <button class=\"mat-fab mat-accent mat-button\" [matTooltip]=\"config.allowAdd?.tooltip || 'Add new record'\" [matTooltipPosition]=\"config.allowAdd?.tooltipPosition || 'after'\" (click)=\"config.allowAdd.add && config.allowAdd.add()\" [disabled]=\"config.allowAdd?.isDisable\"><span>+</span></button>\r\n  </div>\r\n  <!-- Spinner Div -->\r\n  <!-- <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n      <mat-spinner></mat-spinner> -->\r\n  </div>\r\n  <!-- Table -->\r\n  <mat-table [dataSource]=\"dataSource\" matSort [matSortDisabled]=\"!config.sortable\">\r\n    <!-- Dynamic Columns -->\r\n    <div *ngFor=\"let col of config.columns\">\r\n      <ng-container [matColumnDef]=\"col.field\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header [disabled]=\"!config.sortable || col.notToSort\"> {{col.title || (col.field | titlecase)}} </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element[col.field]}} </mat-cell>\r\n      </ng-container>\r\n    </div>\r\n    <!-- Dynamic Actions -->\r\n    <div *ngIf=\"config.actions\">\r\n      <ng-container matColumnDef=\"action\">\r\n          <mat-header-cell *matHeaderCellDef > {{config.actions?.title || 'Action'}} </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\" >\r\n            <button *ngIf=\"config.actions?.edit\" (click)=\"config.actions.edit.editRec(row)\" class=\"btn btn-link remove-padding\" [disabled]=\"config.actions.edit?.isDisable\"><i class=\"material-icons\">edit</i></button>\r\n            <button *ngIf=\"config.actions?.delete\" (click)=\"config.actions.delete.deleteRec(row)\" class=\"btn btn-link remove-padding\" [disabled]=\"config.actions.edit?.isDisable\"><i class=\"material-icons\">delete</i></button>\r\n          </mat-cell>\r\n      </ng-container> \r\n    </div>\r\n    <!-- Dynamic Header -->\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRow == row && config.selectable}\" (click)=\"onSelect.next(row);selectedRow = row\"></mat-row>\r\n  </mat-table>\r\n  <!-- Pagination -->\r\n  <mat-paginator *ngIf=\"config.pageable\"\r\n                 [length]=\"totalCount\"\r\n                 [pageSize]=\"config.pageable?.pageSize || 10\"\r\n                 [pageSizeOptions]=\"config.pageable?.pageSizeOptions || [10, 20, 50]\"\r\n                 [showFirstLastButtons]=\"config.pageable?.showFirstLastButtons === undefined || config.pageable?.showFirstLastButtons\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/reusable_components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_model__ = __webpack_require__("./src/app/reusable_components/list/list.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.displayedColumns = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTableDataSource */]();
        this.ds = [];
        this.initialized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    // For filter for static data
    ListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ListComponent.prototype.ngOnChanges = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTableDataSource */](this.ds);
        if (!this.config.serverInteraction) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.serverInteraction) {
            this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.searchInput.nativeElement, 'input')
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function () {
                _this.paginator.pageIndex = 0;
                _this.passFilterToParent();
            }))
                .subscribe();
            Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function () { return _this.passFilterToParent(); }))
                .subscribe();
        }
        else {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        this.initialized.next({ eventName: 'initialized' });
    };
    ListComponent.prototype.passFilterToParent = function () {
        var obj = {};
        if (this.config.pageable) {
            obj.offset = this.paginator.pageIndex * this.paginator.pageSize;
            obj.limit = this.paginator.pageSize;
        }
        this.config.filterable && (obj.searchValue = this.searchInput.nativeElement.value.trim());
        this.config.sortable && this.sort.active && (obj.sort = { field: this.sort.active, dir: this.sort.direction });
        this.initialized.next({
            eventName: 'filterUpdate',
            data: obj
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.displayedColumns = [];
        for (var _i = 0, _a = this.config.columns; _i < _a.length; _i++) {
            var ob = _a[_i];
            ob.notToDisplay || this.displayedColumns.push(ob.field);
        }
        typeof this.config.actions === "object" && this.displayedColumns.push("action");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('searchInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ListComponent.prototype, "searchInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSort */])
    ], ListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginator */])
    ], ListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__list_model__["a" /* ListConfig */])
    ], ListComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('dataSource'),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "ds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "totalCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "initialized", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "onSelect", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-list",
            template: __webpack_require__("./src/app/reusable_components/list/list.component.html"),
            styles: [__webpack_require__("./src/app/reusable_components/list/list.component.css")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/reusable_components/list/list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListConfig; });
var ListConfig = /** @class */ (function () {
    function ListConfig() {
    }
    return ListConfig;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reusable_functions_service__ = __webpack_require__("./src/app/service/reusable_functions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Router, Event, NavigationEnd } from '@angular/router';


var CommonService = /** @class */ (function () {
    function CommonService(http, reusableFunctionsService) {
        this.http = http;
        this.reusableFunctionsService = reusableFunctionsService;
        this.isSideBarExpand = true;
        // Store Application Menus after login and clear after logout
        this.appMenus = [];
    }
    CommonService.prototype.getLoginData = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url).subscribe(function (data) {
                _this.isSideBarExpand = !!data.isSideBarExpand;
                _this.authToken = data.authToken;
                _this.appMenus = _this.reusableFunctionsService.getNestedChildren(data.appMenus, "controller_id", "parent_controller_id");
                resolve({ status: 'OK', data: data });
            }, function (err) {
                reject({ status: 'KO', data: err });
            });
        });
    };
    CommonService.prototype.getAuthToken = function () {
        return this.authToken;
    };
    CommonService.prototype.getRoutingData = function () {
        var routingResult = [{ pathUrl: "", componentName: "HomeComponent", canActivatedGaurd: [], children: [{ path: '', component: "WelcomeComponent" }, { path: 'main', component: "MainSection" }] }];
        return routingResult;
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__reusable_functions_service__["a" /* ReusableFunctionsService */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/service/reusable_functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReusableFunctionsService; });
/*module.exports = {
    getNestedChildren : function (arr, primKey, ParKey, parent? : any) {
        var out = [];
        for(var i in arr) {
            if(arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i])
            }
        }
        return out;
    }
}*/
var ReusableFunctionsService = /** @class */ (function () {
    function ReusableFunctionsService() {
    }
    // Convert Linear to Multi Level
    ReusableFunctionsService.prototype.getNestedChildren = function (arr, primKey, ParKey, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i]);
            }
        }
        return out;
    };
    return ReusableFunctionsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map