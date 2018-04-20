import {Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

import { ListConfig } from './list.model';

@Component({
  selector : "app-list",
	templateUrl : './list.component.html',
	styleUrls : ['./list.component.css']
})

export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns : Array<string> = [];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() config : ListConfig;
  @Input('dataSource') ds = [];
  @Input() totalCount;
  // For filter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /*constructor()  {
  }*/

  ngOnChanges() {
  	this.dataSource = new MatTableDataSource(this.ds);
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    if(!this.config.serverInteraction){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit() {
    this.displayedColumns = [];
    for(let ob of this.config.columns) {
      ob.notToDisplay || this.displayedColumns.push(ob.field);
    }
    typeof this.config.actions === "object" && this.displayedColumns.push("action");
  }
}