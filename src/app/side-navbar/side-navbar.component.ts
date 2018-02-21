import {Component, Input, Renderer} from '@angular/core';




@Component({
		selector: "app-side-navbar",
		templateUrl: "./side-navbar.component.html",
		styleUrls: ["./side-navbar.component.css"]
	})

export class SideNavbar{
	classArray = new Array;
	constructor(private renderer:Renderer) {}


	onClickLi(){

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
}