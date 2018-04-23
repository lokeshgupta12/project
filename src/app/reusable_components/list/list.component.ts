import {Component, ViewChild, Input, Output, OnInit, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';

import { ListConfig } from './list.model';

@Component({
  selector : "app-list",
	templateUrl : './list.component.html',
	styleUrls : ['./list.component.css']
})

export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns : Array<string> = [];
  dataSource = new MatTableDataSource();
  loading : boolean = false;
  @ViewChild('searchInput') searchInput : ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() config : ListConfig;
  @Input('dataSource') ds = [];
  @Input() totalCount;
  @Output() initialized = new EventEmitter();  
  @Output() onSelect = new EventEmitter();  
  // For filter for static data
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnChanges() {
    this.loading = false;
  	this.dataSource = new MatTableDataSource(this.ds);
    if(!this.config.serverInteraction) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    if(this.config.serverInteraction) {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        this.config.filterable && fromEvent(this.searchInput.nativeElement,'input')
            .pipe(
                debounceTime(250),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;
                    this.passFilterToParent();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.passFilterToParent())
        )
        .subscribe();
    } else {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.initialized.next({eventName : 'initialized'});
  }

  private passFilterToParent() {
    let obj : any = {};
    if (this.config.pageable) {
      obj.offset = this.paginator.pageIndex*this.paginator.pageSize;
      obj.limit = this.paginator.pageSize;
    }
    this.config.filterable && (obj.searchValue = this.searchInput.nativeElement.value.trim());
    this.config.sortable && this.sort.active && (obj.sort = { field : this.sort.active, dir : this.sort.direction});
    this.initialized.next({
      eventName : 'filterUpdate',
      data : obj
    });
    this.loading = true;
  }

  ngOnInit() {
    this.displayedColumns = [];
    for(let ob of this.config.columns)
      ob.notToDisplay || this.displayedColumns.push(ob.field);
    typeof this.config.actions === "object" && this.displayedColumns.push("action");
  }
}