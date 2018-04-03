import { Component } from '@angular/core';
import { CommonService } from '../../service/common.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private commonService : CommonService) {

	}

	logout() {
		localStorage.removeItem('currentUser');
		this.commonService.appMenus = [];

		// clear service of controllers as well.
		// deregister routes too
	}
	menuToggel() {
		this.commonService.showFullSideBar = !this.commonService.showFullSideBar;
		// document.querySelector('.side-navbar').classList.toggle('small');
		// document.querySelector('.main-section').classList.toggle('small');
	}
}
