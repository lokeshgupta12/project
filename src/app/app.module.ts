import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavbar } from './side-navbar/side-navbar.component';
import { MainSection } from './main-section/main-section-component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbar,
    MainSection,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
