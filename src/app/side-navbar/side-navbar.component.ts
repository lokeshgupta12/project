import {Component, Input} from '@angular/core';

@Component({
		selector: "app-side-navbar",
		templateUrl: "./side-navbar.component.html",
		styleUrls: ["./side-navbar.component.css"]
	})

export class SideNavbar{
	@Input() addClassFlag;
	constructor() {
	}
}