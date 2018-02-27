import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DemoService } from '../demo.service';

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    @ViewChild('f') loginForm : NgForm;
    loading = false;
    returnUrl: string;
    demousers : Array<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private demoService : DemoService
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // Access the Data Service's getUsers() method we defined
        this.demoService.getUsers()
            .subscribe(res => this.demousers = res);
    }

    login() {
    	
    	console.log(this.loginForm)
        this.loading = true;
        //setTimeout(function(this) {
        	localStorage.setItem('currentUser',this.loginForm.value.email);
        	this.loading = false;
        	this.router.navigate([this.returnUrl]);
        //},2000)
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