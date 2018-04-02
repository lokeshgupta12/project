import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginResolver } from './guards/login.resolve';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainSection } from './home/main-section/main-section-component';
import { WelcomeComponent } from './home/main-section/welcome/welcome.component';
let routes : Routes = [
	{path : '', component : HomeComponent, canActivate : [AuthGuard], children : [
		{path : '', component : WelcomeComponent},
		{path : 'main', component : MainSection}
	]},
	{path : 'login', component : LoginComponent, resolve : LoginResolver},
	{path : '**', redirectTo : '' }
]
@NgModule({
	declarations : [],
	imports : [RouterModule.forRoot(routes, {useHash:true})],
	exports : [RouterModule]
})
export class AppRouting {

}