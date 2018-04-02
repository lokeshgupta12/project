import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { TreeModule } from 'angular-tree-component';


import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SideNavbar } from './home/side-navbar/side-navbar.component';
import { MainSection } from './home/main-section/main-section-component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './guards/auth.guard';
// import { DemoService } from './demo.service';
import { CommonService } from './service/common.service';
import { WelcomeComponent } from './home/main-section/welcome/welcome.component';



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
    TreeModule
  ],
  providers: [AuthGuard, CommonService /*DemoService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
