import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { TreeModule } from 'angular-tree-component';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SideNavbar } from './home/side-navbar/side-navbar.component';
import { MainSection } from './home/main-section/main-section-component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/main-section/welcome/welcome.component';
/*Demo*/
import { CourseDialogComponent } from './course-dialog/course-dialog.component'
import { ProjectAssignMentComponent } from './project-assignment/project-assignment.component';
/*Resuable Components*/
import { ListComponent } from './reusable_components/list/list.component';
import { NgMatDialogComponent } from './reusable_components/angular-material-dialog/ng-mat-dialog.component';
import { DynamicFormModule } from './reusable_components/dynamic-form/dynamic-form.module';


import { AppRouting } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { httpInterceptorProviders } from './http-interceptors/index';
//import { RequestCache, RequestCacheWithMap } from './service/request-cache.service';
import { CommonService } from './service/common.service';
import { ReusableFunctionsService } from './service/reusable_functions.service';
import { LoginResolver } from './guards/login.resolve';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbar,
    MainSection,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    ProjectAssignMentComponent,
    CourseDialogComponent,
    ListComponent,
    NgMatDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MaterialModule,
    TreeModule,
    DynamicFormModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuard,
    CommonService,
    ReusableFunctionsService,
    LoginResolver,
    //{ provide: RequestCache, useClass: RequestCacheWithMap },
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent, NgMatDialogComponent]
})
export class AppModule { }
