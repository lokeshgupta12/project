import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	addClassFlag = false;
	xyz(){
		this.addClassFlag = !this.addClassFlag;
	}
}
