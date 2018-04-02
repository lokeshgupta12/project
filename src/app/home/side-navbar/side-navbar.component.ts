import { Component/*, Input*/, Renderer } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
		selector: "app-side-navbar",
		templateUrl: "./side-navbar.component.html",
		styleUrls: ["./side-navbar.component.css"]
	})

export class SideNavbar {

	constructor(
		private renderer:Renderer,
		private commonService : CommonService
		) {
		console.log("commonService",this.commonService.appMenus)
	}


	onClickLi() {
		this.renderer.listen('document', 'click', (event)=>{
			event.preventDefault();
			var element = document.getElementsByClassName("active");

			[].forEach.call(element, function(el) {
			    el.className = el.className.replace('active', "");
			});


			if(event.path[1].localName=='li'){
				event.path[1].className='active';
			}
			if(event.path[2].localName=='li'){
				event.path[2].className='active';
			}
			if(event.path[3].localName=='li'){
				event.path[3].className='active';
			}
		});
	}

	nodes = this.commonService.appMenus;
  	options = {};
}