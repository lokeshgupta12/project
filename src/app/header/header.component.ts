import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	
	menuToggel(){
		document.querySelector('.side-navbar').classList.toggle('small');
		document.querySelector('.main-section').classList.toggle('small');
	}
}
