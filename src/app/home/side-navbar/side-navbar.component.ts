import { Component, ViewChild  /*, Input*/, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions, ITreeState } from 'angular-tree-component';



import { CommonService } from '../../service/common.service';

@Component({
		selector: "app-side-navbar",
		templateUrl: "./side-navbar.component.html",
		styleUrls: ["./side-navbar.component.css"]
	})

export class SideNavbar {
	@ViewChild('tree') treeRef : any;
	
	constructor(
		private renderer:Renderer,
		private commonService : CommonService,
		private router : Router
		) {
	}

	get isSidebarVisible(): boolean {
        return this.commonService.showFullSideBar;
    }

	/*onClickLi() {
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
	}*/

	private activateAndNavigateRoute(tree, node, $event) {
		this.treeRef.treeModel.collapseAll();
		setTimeout(()=>{
		 //TREE_ACTIONS.ACTIVATE(tree, node, $event);
	     this.treeRef.treeModel.getNodeById(node.data.id)
      		.setActiveAndVisible();
	     this.router.navigate([node.data.route]);
		},0)
		

	}
	// Get State of tree
	get state(): ITreeState {
	    return localStorage.treeState && JSON.parse(localStorage.treeState);
	}
	// Set State of tree
	set state(state: ITreeState) {
	    localStorage.treeState = JSON.stringify(state);
	}

	// setNode() {
	// 	/*Collapse All Nodes*/
 //    	this.treeRef.treeModel.collapseAll();
 //    	/*Set Active Node By Id*/
 //    	//this.treeRef.treeModel.getNodeById(3)
 //    	/*Set Active Node By name or as you want*/
 //    	this.treeRef.treeModel.getNodeBy((node) => node.data.name === 'Home')
 //      		.setActiveAndVisible();
 //    }
 	// Call On initialization of tree component
	treeRootEvent (data) {
		switch (data.eventName) {
			case "initialized": {
				console.log("initialized",data);
				var selectedNode = data.treeModel.getActiveNode();
				selectedNode && this.router.navigate([selectedNode.data.route]);
				break;
			}
			default:
				// code...
				break;
		}
	}
	// Provide Menu Array to tree component
	nodes = this.commonService.appMenus;
	// Provide options Object to tree component
	options: ITreeOptions = {
	 //    displayField: 'nodeName',
	 //    isExpandedField: 'expanded',
	 //    idField: 'uuid',
	 //    hasChildrenField: 'nodes',
	 //    nodeHeight: 1,
	 //    allowDrag: (node) => {
	 //      return true;
	 //    },
	 //    allowDrop: (node) => {
	 //      return true;
	 //    },
	 //    useVirtualScroll: true,
	 //    animateExpand: true,
	 //    scrollOnActivate: true,
	 //    animateSpeed: 30,
	 //    animateAcceleration: 1.2,
	  	actionMapping : {
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
		      //$event.preventDefault();
		      node.hasChildren
		      	? TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event)
		      	: this.activateAndNavigateRoute(tree, node, $event);
		      	
		      // $event.shiftKey
		      //   ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
		      //   : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
		    }
		  },
		  keys: {
		    [KEYS.ENTER]: (tree, node, $event) => {
		    	if (!node.hasChildren)
		    		this.activateAndNavigateRoute(tree, node, $event);
		    	//alert(`This is ${node.data.name}`)
		    }
		  }
		}
	};
}




// nodes
// hasChildren: For async data load. Denotes that this node might have children, even when 'children' attr is empty.
// isExpanded: Determines whether the node starts as expanded by default. Notice that this field is not bindable, meaning that changing it doesn't affect the tree and vice versa.
