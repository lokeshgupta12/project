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

module.exports = ".wrapper{\n\tposition: relative;\n\theight: 100vh;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n -->\n<!-- <div class=\"wrapper\">\n  <app-header></app-header>\n  <app-side-navbar></app-side-navbar>\n  <app-main-section></app-main-section>\n</div> -->\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__ = __webpack_require__("./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_header_header_component__ = __webpack_require__("./src/app/home/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_side_navbar_side_navbar_component__ = __webpack_require__("./src/app/home/side-navbar/side-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_main_section_main_section_component__ = __webpack_require__("./src/app/home/main-section/main-section-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_login_resolve__ = __webpack_require__("./src/app/guards/login.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_main_section_welcome_welcome_component__ = __webpack_require__("./src/app/home/main-section/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpModule } from '@angular/http';


// import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
// const actionMapping:IActionMapping = {
//   mouse: {
//     click: TREE_ACTIONS.TOGGLE_SELECTED
//   },
//   keys: {
//     [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
//   }  
// }








// import { DemoService } from './demo.service';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_side_navbar_side_navbar_component__["a" /* SideNavbar */],
                __WEBPACK_IMPORTED_MODULE_8__home_main_section_main_section_component__["a" /* MainSection */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_main_section_welcome_welcome_component__["a" /* WelcomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["c" /* TreeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_14__guards_login_resolve__["a" /* LoginResolver */] /*DemoService*/],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
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
                return new Promise(function (resolve, reject) {
                    _this.commonService.getData('/assets/WSResponses/getLoginDataByToken.json').subscribe(function (data) {
                        _this.commonService.appMenus = _this.commonService.getNestedChildren(data.appMenus, "id", "parent");
                        resolve(true);
                    }, function (err) {
                        _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                        resolve(false);
                    });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LoginResolver);
    return LoginResolver;
}());



/***/ }),

/***/ "./src/app/home/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main-header {\n    position: relative;\n    max-height: 100px;\n    z-index:2;\n}\n.main-header .logo {\n    display: block;\n    float: left;\n    height: 50px;\n    font-size: 20px;\n    line-height: 50px;\n    text-align: center;\n    width: 230px;\n    padding: 0 15px;\n    font-weight: 300;\n    overflow: hidden;\n}\n.main-header .navbigation {\n    margin-bottom: 0;\n    margin-left: 230px;\n    border: none;\n    min-height: 50px;\n    border-radius: 0;\n}\n.main-header .sidebar-toggle {\n    float: left;\n    background-color: transparent;\n    background-image: none;\n    padding: 15px 15px;\n    font-family: fontAwesome;\n}\n.main-header .sidebar-toggle:before {\n    content: \"\\f0c9\";\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n}\n.main-header .sidebar-toggle .icon-bar {\n    display: none;\n}\n.main-header .logo {\n    background-color: #367fa9;\n    color: #fff;\n    border-bottom: 0 solid transparent;\n}\n.main-header .navbigation {\n    background-color: #3c8dbc;\n}\n.main-sidebar{\n    background-color: #222d32;\n}\n.main-header .navbigation .sidebar-toggle {\n    color: #fff;\n}\n.profile {\n    float: right; \n    margin-right: 15px;\n    position: relative;\n}\na.profilelink {\n    position: relative;\n    display: block;\n    padding: 13px 15px;\n    color: #fff;\n}\na.profilelink:hover{\n    background: #367fa9;\n}\n.user-name{\n    display: inline-block;\n    position: relative;\n    top: -3px;\n    font-size: 14px;\n}\n.user-image {\n    float: left;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-top: -2px;\n}\n.dropdown-menu {\n    margin-top: 0;\n    border-radius: 0;\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    background: rgba(255, 255, 255, 0.96);\n    border: 1px solid #dddddd;\n    padding: 0;\n    min-width: 120px;\n    max-width: 300px;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    min-width: 160px;\n    padding: 5px 0;\n    margin: 0;\n    font-size: 14px;\n    list-style: none;\n}\n.dropdown-menu > li {\n    margin: 0;\n}\n.dropdown-menu > li > a {\n    padding: 10px 5px 10px 5px;\n    border-bottom: 1px solid #e2e2e2;\n    color: #575757;\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    display: block;\n    line-height: 1.428571429;\n}\n.dropdown-menu > li > a:hover{\n    background: #f6f6f6;\n}\n.dropdown-menu > li:last-child > a{\n    border-bottom: 0;\n}\n.dropdown-menu > li > a i {\n    margin-right: 10px;\n    font-size: 18px;\n    vertical-align: middle;\n}"

/***/ }),

/***/ "./src/app/home/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <a routerLink=\"/\" class=\"logo\">New Dashboard</a>\n  <nav class=\"navbigation navbar-static-top\">\n    <a href=\"javascript:void(0)\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\" (click)='menuToggel()'>\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n    </a>\n    <div class=\"profile\">\n        <a class=\"profilelink\" (click)=\"open = !open\">\n            <img src=\"./assets/user.jpg\" class=\"user-image\">\n            <span class=\"user-name\">Alexander Pierce</span>\n        </a>\n        <ul class=\"dropdown-menu\" [ngClass]=\"open ? 'd-block' : 'd-none'\" >\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-user\"></i> My Account\n                </a>\n            </li>\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-gear\"></i> Account Settings\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/login\" (click)=\"logout()\">\n                    <i class=\"fa fa-sign-out\"></i>Logout\n                </a>\n            </li>\n        </ul>\n    </div>\n  </nav>\n</header>\n"

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
    HeaderComponent.prototype.menuToggel = function () {
        this.commonService.showFullSideBar = !this.commonService.showFullSideBar;
        // document.querySelector('.side-navbar').classList.toggle('small');
        // document.querySelector('.main-section').classList.toggle('small');
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

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-navbar></app-side-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/main-section/main-section-component.css":
/***/ (function(module, exports) {

module.exports = ".main-section{\n\tmargin-left: 230px;\n    -webkit-transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n    transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n    transition: transform .3s ease-in-out,margin .3s ease-in-out;\n    transition: transform .3s ease-in-out,margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n\tbackground-color: #ecf0f5;\n}\n.small.main-section{\n\tmargin-left: 50px;\n}\n.content {\n    padding: 15px;\n}\n.content-header {\n    position: relative;\n    padding: 15px 15px 0 15px;\n}\n.content-header>h1 {\n    margin: 0;\n    font-size: 24px;\n}\n.content-header>h1>small {\n    font-size: 15px;\n    display: inline-block;\n    padding-left: 4px;\n    font-weight: 300;\n}\n.content-header>.breadcrumb {\n    float: right;\n    background: transparent;\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    padding: 7px 5px;\n    position: absolute;\n    top: 15px;\n    right: 10px;\n    border-radius: 2px;\n    list-style: none;\n}\n.breadcrumb>li {\n    display: inline-block;\n}\n.content-header>.breadcrumb>li>a {\n    color: #444;\n    text-decoration: none;\n    display: inline-block;\n}\n.breadcrumb>.active {\n    color: #777;\n}\n.content-header>.breadcrumb>li+li:before {\n    content: '>\\00a0';\n}\n.breadcrumb>li+li:before {\n    padding: 0 5px;\n    color: #ccc;\n    content: \"/\\00a0\";\n}\n.content-header>.breadcrumb>li>a>.fa {\n    margin-right: 5px;\n}\n.box {\n    position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    width: 100%;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n            box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n}\n.box-header {\n    color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\n.box-header:before, .box-body:before, .box-footer:before, .box-header:after, .box-body:after, .box-footer:after {\n    content: \" \";\n    display: table;\n}\n.box-header .box-title {\n    display: inline-block;\n    font-size: 18px;\n    margin: 0;\n    line-height: 1;\n}\n.box-body {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    padding: 10px;\n}\n.margin-top32{\n    margin-top: 32px;\n}"

/***/ }),

/***/ "./src/app/home/main-section/main-section-component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main-section\">\n  <section class=\"content-header\">\n    <h1> Data Tables </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li><a href=\"#\">Tables</a></li>\n      <li class=\"active\">Data tables</li>\n    </ol>\n  </section>\n  <section class=\"content\">\n    <div class=\"box\">\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n              </div>\n              <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </form>\n          </div>\n          <div class=\"col-4\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail2\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword2\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n              </div>\n              <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\">\n                <label class=\"form-check-label\" for=\"exampleCheck2\">Check me out</label>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </form>\n          </div>\n          <div class=\"col-4\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail3\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail3\" placeholder=\"Enter email\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword3\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" placeholder=\"Password\">\n              </div>\n              <div class=\"form-check\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck3\">\n                <label class=\"form-check-label\" for=\"exampleCheck3\">Check me out</label>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </form>\n          </div>\n         \n        </div>\n      </div>\n    </div>\n    <div class=\"box\">\n      <div class=\"box-body\">\n\n<div class=\"row\">\n        <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label >Search</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n              </div>\n        </div>\n        <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label >Search</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n              </div>\n        </div>\n        <div class=\"col-4\">\n            <button type=\"submit\" class=\"btn btn-primary margin-top32\">Submit</button>\n        </div>\n      </div>\n        \n\n\n        <table id=\"example2\" class=\"table table-bordered table-hover dataTable\">\n          <thead>\n            <tr>\n              <th>Rendering engine</th>\n              <th>Browser</th>\n              <th>Platform(s)</th>\n              <th>Engine version</th>\n              <th>CSS grade</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Trident</td>\n              <td>Internet Explorer 4.0\n              </td>\n              <td>Win 95+</td>\n              <td> 4</td>\n              <td>X</td>\n            </tr>\n            <tr>\n              <td>Trident</td>\n              <td>Internet Explorer 5.0\n              </td>\n              <td>Win 95+</td>\n              <td>5</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>Trident</td>\n              <td>Internet Explorer 5.5\n              </td>\n              <td>Win 95+</td>\n              <td>5.5</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Trident</td>\n              <td>Internet Explorer 6\n              </td>\n              <td>Win 98+</td>\n              <td>6</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Trident</td>\n              <td>Internet Explorer 7</td>\n              <td>Win XP SP2+</td>\n              <td>7</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Trident</td>\n              <td>AOL browser (AOL desktop)</td>\n              <td>Win XP</td>\n              <td>6</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Firefox 1.0</td>\n              <td>Win 98+ / OSX.2+</td>\n              <td>1.7</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Firefox 1.5</td>\n              <td>Win 98+ / OSX.2+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Firefox 2.0</td>\n              <td>Win 98+ / OSX.2+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Firefox 3.0</td>\n              <td>Win 2k+ / OSX.3+</td>\n              <td>1.9</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Camino 1.0</td>\n              <td>OSX.2+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Camino 1.5</td>\n              <td>OSX.3+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Netscape 7.2</td>\n              <td>Win 95+ / Mac OS 8.6-9.2</td>\n              <td>1.7</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Netscape Browser 8</td>\n              <td>Win 98SE+</td>\n              <td>1.7</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Netscape Navigator 9</td>\n              <td>Win 98+ / OSX.2+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.0</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.1</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1.1</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.2</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1.2</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.3</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1.3</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.4</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1.4</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.5</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1.5</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.6</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>1.6</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.7</td>\n              <td>Win 98+ / OSX.1+</td>\n              <td>1.7</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Mozilla 1.8</td>\n              <td>Win 98+ / OSX.1+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Seamonkey 1.1</td>\n              <td>Win 98+ / OSX.2+</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Gecko</td>\n              <td>Epiphany 2.20</td>\n              <td>Gnome</td>\n              <td>1.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>Safari 1.2</td>\n              <td>OSX.3</td>\n              <td>125.5</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>Safari 1.3</td>\n              <td>OSX.3</td>\n              <td>312.8</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>Safari 2.0</td>\n              <td>OSX.4+</td>\n              <td>419.3</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>Safari 3.0</td>\n              <td>OSX.4+</td>\n              <td>522.1</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>OmniWeb 5.5</td>\n              <td>OSX.4+</td>\n              <td>420</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>iPod Touch / iPhone</td>\n              <td>iPod</td>\n              <td>420.1</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Webkit</td>\n              <td>S60</td>\n              <td>S60</td>\n              <td>413</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 7.0</td>\n              <td>Win 95+ / OSX.1+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 7.5</td>\n              <td>Win 95+ / OSX.2+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 8.0</td>\n              <td>Win 95+ / OSX.2+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 8.5</td>\n              <td>Win 95+ / OSX.2+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 9.0</td>\n              <td>Win 95+ / OSX.3+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 9.2</td>\n              <td>Win 88+ / OSX.3+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera 9.5</td>\n              <td>Win 88+ / OSX.3+</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Opera for Wii</td>\n              <td>Wii</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Nokia N800</td>\n              <td>N800</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Presto</td>\n              <td>Nintendo DS browser</td>\n              <td>Nintendo DS</td>\n              <td>8.5</td>\n              <td>C/A<sup>1</sup></td>\n            </tr>\n            <tr>\n              <td>KHTML</td>\n              <td>Konqureror 3.1</td>\n              <td>KDE 3.1</td>\n              <td>3.1</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>KHTML</td>\n              <td>Konqureror 3.3</td>\n              <td>KDE 3.3</td>\n              <td>3.3</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>KHTML</td>\n              <td>Konqureror 3.5</td>\n              <td>KDE 3.5</td>\n              <td>3.5</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Tasman</td>\n              <td>Internet Explorer 4.5</td>\n              <td>Mac OS 8-9</td>\n              <td>-</td>\n              <td>X</td>\n            </tr>\n            <tr>\n              <td>Tasman</td>\n              <td>Internet Explorer 5.1</td>\n              <td>Mac OS 7.6-9</td>\n              <td>1</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>Tasman</td>\n              <td>Internet Explorer 5.2</td>\n              <td>Mac OS 8-X</td>\n              <td>1</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>NetFront 3.1</td>\n              <td>Embedded devices</td>\n              <td>-</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>NetFront 3.4</td>\n              <td>Embedded devices</td>\n              <td>-</td>\n              <td>A</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>Dillo 0.8</td>\n              <td>Embedded devices</td>\n              <td>-</td>\n              <td>X</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>Links</td>\n              <td>Text only</td>\n              <td>-</td>\n              <td>X</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>Lynx</td>\n              <td>Text only</td>\n              <td>-</td>\n              <td>X</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>IE Mobile</td>\n              <td>Windows Mobile 6</td>\n              <td>-</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>Misc</td>\n              <td>PSP browser</td>\n              <td>PSP</td>\n              <td>-</td>\n              <td>C</td>\n            </tr>\n            <tr>\n              <td>Other browsers</td>\n              <td>All others</td>\n              <td>-</td>\n              <td>-</td>\n              <td>U</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th>Rendering engine</th>\n              <th>Browser</th>\n              <th>Platform(s)</th>\n              <th>Engine version</th>\n              <th>CSS grade</th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </section>\n</section>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainSection = /** @class */ (function () {
    function MainSection() {
        // code...
    }
    MainSection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-section',
            template: __webpack_require__("./src/app/home/main-section/main-section-component.html"),
            styles: [__webpack_require__("./src/app/home/main-section/main-section-component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainSection);
    return MainSection;
}());



/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ".main-section{\n\tmargin-left: 230px;\n    -webkit-transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n    transition: margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n    transition: transform .3s ease-in-out,margin .3s ease-in-out;\n    transition: transform .3s ease-in-out,margin .3s ease-in-out,-webkit-transform .3s ease-in-out;\n\tbackground-color: #ecf0f5;\n}"

/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main-section\">\n\t<img src=\"../../../../assets/welcome.jpg\" class=\"img-fluid\">  \n</section>"

/***/ }),

/***/ "./src/app/home/main-section/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/home/main-section/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/home/main-section/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "/* For Larg Desktop */\n.side-navbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding-top: 50px;\n    min-height: 100%;\n    width: 230px;\n    z-index: 1;\n    background-color: #222d32;\n    -webkit-transition: width .3s ease-in-out;\n    transition: width .3s ease-in-out;\n}\n.sidebar-menu{\n    white-space: nowrap;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    margin-top: 10px;\n}\n.sidebar-menu a{\n\tfont-size: 14px;\n    color: #b8c7ce;\n}\n.sidebar-menu > li {\n    position: relative;\n}\n.sidebar-menu > li > a {\n    padding: 0px 5px 0px 15px;\n    display: block;\n    position: relative;\n}\n.sidebar-menu > li a .fa{\n    width: 20px;\n}\n.sidebar-menu > li > a {\n    border-left: 3px solid transparent;\n}\n.sidebar-menu>li:hover > a{\n    background: #1e282c;\n    color: #fff;\n}\n.sidebar-menu >li.active > a {\n    border-left-color: #3c8dbc;\n    color: #fff;\n}\n.sidebar-menu > li > a span{\n    display: inline-block;\n    padding: 12px 5px 12px 0;\n    \n}\n.sidebar-menu > li:not(.treeview) > a >span {\n    border-bottom-right-radius: 4px;\n}\n.sidebar-menu > li > a span.pull-right-container {\n    float: right;\n    margin-top: 4px;\n}\n.sidebar-menu li > a > .pull-right-container > .fa-angle-left {\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin-right: 10px;\n}\n.treeview-menu {\n    display: none;\n    background: #2c3b41;\n    margin: 0;\n    padding-left: 5px;\n}\n.sidebar-menu >li.active .treeview-menu {\n    display: block;\n}\n.treeview-menu > li > a {\n    padding: 5px 5px 8px 15px;\n    display: block;\n}\n.treeview-menu li:hover a{\n    color: #fff;\n}\n.sidebar-menu > li:hover > a .fa-angle-left{\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n/* For Small Desktop */\n.small .sidebar-menu >li.active .treeview-menu {\n    display: none;\n}\n.small.side-navbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding-top: 50px;\n    min-height: 100%;\n    width: 50px;\n    z-index: 1;\n    background-color: #222d32;\n    \n}\n.small .sidebar-menu > li > a {\n    padding: 12px 5px 12px 15px;\n    display: block;\n    position: relative;\n}\n.small .sidebar-menu > li > a span{\n    display: none;\n}\n.small .sidebar-menu > li:hover > a span{\n    display: block;\n    position: absolute;\n    width: 180px;\n    left: 50px;\n    border-top-right-radius: 4px;\n    top: 4px;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    background-color: #1e282c;\n}\n.small .sidebar-menu > li:hover > a span.pull-right-container {\n    position: relative;\n    float: right;\n    width: auto;\n    left: 180px;\n    top: -30px;\n    z-index: 3;\n}\n.small .treeview-menu {\n    display: none;\n    list-style: none;\n    padding: 5px 0;\n    margin: 0;\n    padding-left: 5px;\n    border-bottom-right-radius: 4px;\n    background: #2c3b41;\n}\n.small .sidebar-menu>li:hover .treeview-menu{\n    display: block;\n    position: absolute;\n    width: 180px;\n    left: 50px;\n} \n\n\n"

/***/ }),

/***/ "./src/app/home/side-navbar/side-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-navbar\">\n    <section class=\"sidebar\">\n<!-- <tree-root [nodes]=\"nodes\" [focused]=\"true\"></tree-root> -->\n<input id=\"filter\" #filter (keyup)=\"tree.treeModel.filterNodes(filter.value)\" placeholder=\"Search menus\"/>\n<tree-root [nodes]=\"nodes\" [focused]=\"true\" [(state)]=\"state\" #tree [options]=\"options\" (initialized)=\"treeRootEvent($event)\">\n  <ng-template #treeNodeTemplate let-node let-index=\"index\">\n    <span [ngClass]=\"{'fa fa-circle-o' : !node.hasChildren}\">{{ isSidebarVisible ? node.data.name : '' }}</span>\n  </ng-template>\n</tree-root>\n\n<!-- <button (click)=\"setNode(3)\">Set Node</button> -->\n        <!-- <ul class=\"sidebar-menu\">\n            <li class=\"treeview active\" (click)=\"onClickLi()\">\n                <a href=\"#\">\n                    <i class=\"fa fa-dashboard\"></i> \n                    <span>Dashboard</span>\n                    <span class=\"pull-right-container\">\n                      <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li class=\"active\"><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n                    <li class=\"active\"><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n                </ul>\n            </li>\n            <li class=\"treeview\"  (click)=\"onClickLi()\">\n                <a href=\"#\">\n                    <i class=\"fa fa-files-o\"></i>\n                    <span>Layout Options</span>\n                    <span class=\"pull-right-container\">\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n                </ul>\n            </li>\n            <li class=\"treeview\"  (click)=\"onClickLi()\">\n                <a href=\"#\">\n                    <i class=\"fa fa-laptop\"></i>\n                    <span>UI Elements</span>\n                    <span class=\"pull-right-container\">\n                        <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n                </ul>\n            </li>\n            <li  (click)=\"onClickLi()\"><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n        </ul> -->\n    </section>\n</aside>\n"

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
    function SideNavbar(renderer, commonService, router) {
        var _this = this;
        this.renderer = renderer;
        this.commonService = commonService;
        this.router = router;
        this.treeInitializeFlag = false;
        this.currentRoute = '';
        // Provide Menu Array to tree component
        this.nodes = this.commonService.appMenus;
        // Provide options Object to tree component
        this.options = {
            //    displayField: 'nodeName',
            //    isExpandedField: 'expanded',
            //    idField: 'uuid',
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
                    click: function (tree, node, $event) {
                        //tree.collapseAll();
                        //$event.preventDefault();
                        node.hasChildren
                            ? __WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event)
                            : _this.activateAndNavigateRoute(node);
                        // $event.shiftKey
                        //   ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
                        //   : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
                    }
                },
                keys: (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_2_angular_tree_component__["a" /* KEYS */].ENTER] = function (tree, node, $event) {
                        if (!node.hasChildren)
                            _this.activateAndNavigateRoute(node);
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
    SideNavbar.prototype.ngOnDestroy = function () {
        this.routerSubscriber.unsubscribe();
    };
    SideNavbar.prototype.collapseAndSetActiveNode = function () {
        var _this = this;
        this.treeRef.treeModel.collapseAll();
        setTimeout(function () {
            _this.treeRef.treeModel.getNodeBy(function (node) { return node.data.route === _this.currentRoute; })
                .setActiveAndVisible();
        }, 0);
    };
    Object.defineProperty(SideNavbar.prototype, "isSidebarVisible", {
        get: function () {
            return this.commonService.showFullSideBar;
        },
        enumerable: true,
        configurable: true
    });
    /*onClickLi() {
        this.renderer.listen('document', 'click', (event)=>{
            event.preventDefault();
            var element = document.getElementsByClassName("active");

            [].forEach.call(element, function(el) {
                el.className = el.className.replace('active', "");
            });


            if(event.path[1].localName=='li'){
                event.path[1].className='active';
            }
            if(event.path[2].localName=='li'){
                event.path[2].className='active';
            }
            if(event.path[3].localName=='li'){
                event.path[3].className='active';
            }
        });
    }*/
    SideNavbar.prototype.activateAndNavigateRoute = function (node) {
        this.router.navigate([node.data.route]);
        // this.treeRef.treeModel.collapseAll();
        // setTimeout(()=>{
        //  //TREE_ACTIONS.ACTIVATE(tree, node, $event);
        //     this.treeRef.treeModel.getNodeById(node.data.id)
        //     		.setActiveAndVisible();
        //this.router.navigate([node.data.route]);
        // },0);
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
    // setNode() {
    // 	/*Collapse All Nodes*/
    //    	this.treeRef.treeModel.collapseAll();
    //    	/*Set Active Node By Id*/
    //    	//this.treeRef.treeModel.getNodeById(3)
    //    	/*Set Active Node By name or as you want*/
    //    	this.treeRef.treeModel.getNodeBy((node) => node.data.name === 'Home')
    //      		.setActiveAndVisible();
    //    }
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
            default:
                // code...
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('tree'),
        __metadata("design:type", Object)
    ], SideNavbar.prototype, "treeRef", void 0);
    SideNavbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-side-navbar",
            template: __webpack_require__("./src/app/home/side-navbar/side-navbar.component.html"),
            styles: [__webpack_require__("./src/app/home/side-navbar/side-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SideNavbar);
    return SideNavbar;
}());

// nodes
// hasChildren: For async data load. Denotes that this node might have children, even when 'children' attr is empty.
// isExpanded: Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login{\n    width: 500px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -159px;\n    margin-left: -250px;\n\n}\n\n\n.panel {\n    background-color: #fff;\n    border: 1px solid #bce8f1;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n\n\n.panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid #bce8f1;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px;\n    color: #31708f;\n    background-color: #d9edf7;\n}\n\n\n.panel-title {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n\n\n.forgot {\n    float: right;\n    font-size: 12px;\n    position: relative;\n    top: -10px;\n}\n\n\n.forgot a{\n    color: #31708f;\n}\n\n\n.panel-body {\n    padding: 15px;\n    padding-top: 30px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor=\"let user of demousers\">{{ user.email }}</li>\n</ul> -->\n\n<div class=\"login\">\n    <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <div class=\"panel-title\">Sign In</div>\n        <div class=\"forgot\"><a href=\"#\">Forgot password?</a></div>\n    </div>\n    <div class=\"panel-body\">\n    <form  (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n            <label for=\"username\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" ngModel #email=\"ngModel\" required email />\n            <div *ngIf=\"email.errors && email.touched\">\n\t            <span *ngIf=\"email.errors.required\" class=\"redItalic\">Email required.</span>\n\t            <span *ngIf=\"!email.errors.required && email.errors.email\" class=\"redItalic\">Email not valid.</span>\n            </div>\n            <!-- <div *ngIf=\"(email.touched && !email.valid) || (f.submitted && !email.valid)\" class=\"help-block\">Email is required</div> -->\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel #password=\"ngModel\" required minlength=\"6\" maxlength=\"15\" />\n            <div *ngIf=\"password.errors && password.touched\">\n\t            <span *ngIf=\"password.errors.required\" class=\"redItalic\">Password required.</span>\n\t            <span *ngIf=\"!password.errors.required && (password.errors.minlength || password.errors.maxlength)\" class=\"redItalic\">Password length must be in between of 6 and 15.</span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading || !f.valid\" class=\"btn btn-success\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n    </form>\n    </div>\n    </div>\n</div>\n"

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
    function LoginComponent(route, router, commonService, http /*,
        private demoService : DemoService*/
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
    ) {
        this.route = route;
        this.router = router;
        this.commonService = commonService;
        this.http = http; /*,
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
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        this.http.post('http://localhost:3000/login', { "name": this.loginForm.value.email, "password": this.loginForm.value.password }, {
            headers: headers
        }).subscribe(function (data) {
            _this.loading = false;
            localStorage.setItem('currentUser', _this.loginForm.value.email);
            _this.commonService.appMenus = _this.commonService.getNestedChildren(data.appMenus, "controller_id", "parent_controller_id");
            _this.router.navigate([_this.returnUrl]);
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */])
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
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] /*,
            private demoService : DemoService*/
            //private authenticationService: AuthenticationService,
            //private alertService: AlertService
        ])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
    function CommonService(http) {
        this.http = http;
        this.showFullSideBar = true;
        // Store Application Menus after login and clear after logout
        this.appMenus = [];
    }
    CommonService.prototype.getData = function (url) {
        return this.http.get(url);
    };
    CommonService.prototype.getRoutingData = function () {
        var routingResult = [{ pathUrl: "", componentName: "HomeComponent", canActivatedGaurd: [], children: [{ path: '', component: "WelcomeComponent" }, { path: 'main', component: "MainSection" }] }];
        return routingResult;
    };
    // Convert Linear to Multi Level
    CommonService.prototype.getNestedChildren = function (arr, primKey, ParKey, parent) {
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
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommonService);
    return CommonService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
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