import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { MainSection } from '../main-section-component'
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
    private http: HttpClient
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
          console.log("edit",data);
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
          const filter = queryParams.searchValue || '',
          //sortOrder = queryParams.sortOrder,
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize);
          this.http.get('/assets/WSResponses/periodic-table.json').subscribe((data : any)=>{
                if (queryParams.searchValue)
                   data = data.filter(obj => obj.Name.toLowerCase().search(queryParams.searchValue.toLowerCase()) >= 0);
                if(queryParams.sort) {
                  data.sort((a,b) => {
                      return Number(a[queryParams.sort.field]>a[queryParams.sort.field])*(queryParams.sort.field==='asc'?1:-1);
                  })
                }
                this.totalCount = data.length;
                queryParams.limit && (this.dataSource = data.slice(queryParams.offset,queryParams.offset+queryParams.limit));
            },(err)=>{
                console.log({status:'KO', data : err});
            })
            // setTimeout(() => {
            //     res.status(200).json({payload: lessonsPage});
            // },1000);
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
      // this.dataSource = [{position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      //   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      //   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      //   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      //   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      //   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      //   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      //   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      //   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      //   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}]
      //this.dataSource[0].position = 150
        // const dialogRef = this.dialog.open(CourseDialogComponent,
        //     {
        //       disableClose : true,
        //       autoFocus: true,
        //       data: {
        //           description, longDescription, category
        //       }
        //     });

        // dialogRef.afterClosed().subscribe(
        //     val => console.log("Dialog output:", val)
        // );

    }

  openDialog(): void {
    let dialogRef = this.dialog.open(MainSection, {
      //width: '100%',
      height : '600px',
      disableClose: true,
      data: {
        name: "Lovelesh",
        animal: "Rabbit"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}