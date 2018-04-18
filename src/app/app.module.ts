import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SideNavbar } from './home/side-navbar/side-navbar.component';
import { MainSection } from './home/main-section/main-section-component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/main-section/welcome/welcome.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component'

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
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MaterialModule,
    TreeModule
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
  entryComponents: [CourseDialogComponent]
})
export class AppModule { }
