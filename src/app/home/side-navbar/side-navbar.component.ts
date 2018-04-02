import { Component/*, Input*/, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';



import { CommonService } from '../../service/common.service';

@Component({
		selector: "app-side-navbar",
		templateUrl: "./side-navbar.component.html",
		styleUrls: ["./side-navbar.component.css"]
	})

export class SideNavbar {

	constructor(
		private renderer:Renderer,
		private commonService : CommonService,
		private router : Router
		) {
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

	actionMapping:IActionMapping = {
	  mouse: {
	    // contextMenu: (tree, node, $event) => {
	    //   $event.preventDefault();
	    //   alert(`context menu for ${node.data.name}`);
	    // },
	    // dblClick: (tree, node, $event) => {
	    //   if (node.hasChildren) {
	    //     TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
	    //   }
	    // },
	    click: (tree, node, $event) => {
	      //tree.collapseAll();
	      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
	      else {
	      	TREE_ACTIONS.ACTIVATE(tree, node, $event);
	      	this.router.navigate([node.data.route]);
	      }
	      	
	      // $event.shiftKey
	      //   ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
	      //   : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
	    }
	  }/*,
	  keys: {
	    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
	  }*/
	};

	nodes = this.commonService.appMenus;
	options: ITreeOptions = {
	  actionMapping : this.actionMapping
	};
}