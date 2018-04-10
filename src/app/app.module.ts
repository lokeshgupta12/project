import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './http-interceptor'


import { TreeModule } from 'angular-tree-component';
// import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
// const actionMapping:IActionMapping = {
//   mouse: {
//     click: TREE_ACTIONS.TOGGLE_SELECTED
//   },
//   keys: {
//     [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
//   }  
// }


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
import { LoginResolver } from './guards/login.resolve';
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
  providers: [{ 
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
    }, AuthGuard, CommonService, LoginResolver /*DemoService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
