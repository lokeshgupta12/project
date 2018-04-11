import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { AppRouting } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { MyHttpInterceptor } from './http-interceptor'
import { CommonService } from './service/common.service';
import { LoginResolver } from './guards/login.resolve';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbar,
    MainSection,
    LoginComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    MaterialModule,
    TreeModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
    },
    AuthGuard,
    CommonService,
    LoginResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
