import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { DemoService } from '../demo.service';
import { CommonService } from '../service/common.service';

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    @ViewChild('f') loginForm : NgForm;
    loading : boolean = false;
    returnUrl: string;
    //demousers : Array<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commonService : CommonService,
        private http : HttpClient /*,
        private demoService : DemoService*/
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) { }

    ngOnInit() {
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
    }

    login() {
        this.loading = true;
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });
        this.http.post('http://localhost:3000/login', {"name":this.loginForm.value.email, "password" : this.loginForm.value.password}, {
        headers: headers
      }).subscribe((data : any) => {
    
            this.loading = false;
            localStorage.setItem('currentUser',this.loginForm.value.email);
            this.commonService.appMenus = this.commonService.getNestedChildren(data.appMenus, "controller_id", "parent_controller_id");
            this.router.navigate([this.returnUrl]);
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
    }
}