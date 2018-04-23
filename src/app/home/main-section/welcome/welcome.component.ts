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
      {field : 'id', title : 'No.' },
      {field : 'Name' },
      {field : 'Atomic Weight'},
      {field : 'Sym.', notToSort : true },
      {field : 'M.P. (°C)' },
      {field : 'B.P. (°C)' },
      {field : 'Density (g/cm3)' },
      {field : 'Earth crust (%)' },
      {field : 'Discovery (Year)' },
      {field : 'Group' },
      {field : 'Electron configuration' },
      {field : 'Ionization energy (eV)' },
    ],
    sortable : true,
    selectable : true,
    filterable : true,
    pageable : {
      /*pageSize : 8,
      pageSizeOptions : [8,16,24],
      showFirstLastButtons : true*/
    },
    serverInteraction : true,
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
        console.log("app-list is initialized");
        break;
      case "filterUpdate": {
        console.log("filterUpdate",event.data);
        const queryParams = event.data;
          this.http.get('/assets/WSResponses/periodic-table.json').subscribe((data : any)=>{
                if (queryParams.searchValue)
                   data = data.filter(obj => obj.Name.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0);

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
    this.http.get('/assets/WSResponses/periodic-table.json').subscribe((data : {}[])=>{
                this.dataSource = data.slice(0,10);
                this.totalCount = data.length;
            },(err)=>{
                console.log({status:'KO', data : err});
            })
  }
  courses = [
    {
        id: 1,
        description: "Angular for Beginners",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'BEGINNER',
        lessonsCount: 10
    },
    {
        id: 2,
        description: 'Angular Security Course - Web Security Fundamentals',
        longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11
    }]

    editCourse({description, longDescription, category}) {
        const dialogRef = this.dialog.open(CourseDialogComponent,
            {
              disableClose : true,
              autoFocus: true,
              data: {
                  description, longDescription, category
              }
            });

        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );

    }
}