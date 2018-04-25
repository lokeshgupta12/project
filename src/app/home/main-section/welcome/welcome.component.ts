import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { ReusableFunctionsService } from '../../../service/reusable_functions.service';

import { CourseDialogComponent } from '../../../course-dialog/course-dialog.component'
import { ListConfig } from '../../../reusable_components/list/list.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private http: HttpClient,
    private reusableFunctionsService : ReusableFunctionsService
    ) { }
  
  totalCount = 50;
  dataSource : {}[] = [];
  listConfig : ListConfig = {
    columns : [
      {field : 'id', notToDisplay : true },
      {field : 'component' },
      {field : 'type'},
      {field : 'description'},
      {field : 'status' }
    ],
    sortable : true,
    selectable : true,
    filterable : true,
    pageable : {
      /*pageSize : 8,
      pageSizeOptions : [8,16,24],
      showFirstLastButtons : true*/
    },
    serverInteraction : false,
    showLoadingProgress : true,
    showPopupOnDelete : true,
    actions : {
      title : 'Actions',
      edit : {
        editRec : function(data) {
          console.log("edit",data);
        },
        //isDisable : true
      },
      delete : {
        //isDisable : true,
        deleteRec : function(data) {
          console.log("delete",data);
        },
      },
    },
    allowAdd : {
      //tooltip : "Add Record",
      //tooltipPosition : 'below',
      //isDisable : true,
      add : function() {
        console.log("Add");
      }
    }
  }

  onInitializeList(event) {
    switch (event.eventName) {
      case "initialized":
        break;
      case "filterUpdate": {
        const queryParams = event.data;
          this.http.get('/assets/others/bug-feature-update.json').subscribe((data : any)=>{
                if (queryParams.searchValue)
                   data = data.filter(obj => {
                     return obj.component.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                     obj.description.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                     obj.type.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0 ||
                     obj.status.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0;
                   });

                if(queryParams.sort && queryParams.sort.dir)
                  data = this.reusableFunctionsService.sortArray(data, queryParams.sort.field, queryParams.sort.dir);

                setTimeout(() => {
                  this.totalCount = data.length;
                  queryParams.limit && (this.dataSource = data.slice(queryParams.offset,queryParams.offset+queryParams.limit));
                },1000);
            },(err)=>{
                console.log({status:'KO', data : err});
            })
        break;      
      }
    }
  }
  onSelect(row) {
    console.log('onSelect',row);
  }
  ngOnInit() {
    this.http.get('/assets/others/bug-feature-update.json').subscribe((data : {}[])=>{
        this.dataSource = this.listConfig.serverInteraction ? data.slice(0,10) : data;
        this.totalCount = data.length;
    },(err)=>{
        console.log({status:'KO', data : err});
    })
  }
}