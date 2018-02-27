import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	logout() {
		localStorage.removeItem('currentUser');
		// clear service of controllers as well.
		// deregister routes too
	}
	menuToggel() {
		document.querySelector('.side-navbar').classList.toggle('small');
		document.querySelector('.main-section').classList.toggle('small');
	}
}
