import { Component, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { ListComponent } from '../reusable_components/list/list.component';
import { TaskManagementFormComponent } from './task-management-form/task-management-form.component';
import { ReusableFunctionsService } from '../service/reusable_functions.service';
import { ListConfig } from '../reusable_components/list/list.model';

const typeObj = {
  1 : "bug",
  2 : "feature",
  3 : "update"
}

@Component({
  selector : 'app-task-management',
  templateUrl : './task-management.component.html'
})
export class TaskManagementComponent {
  @ViewChild(ListComponent) listComponent;

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
    filterable : true,
    pageable : true,
    serverInteraction : false,
    showLoadingProgress : true,
    showPopupOnDelete : true,
    actions : {
      title : 'Actions',
      edit : true,
      delete : true
    },
    allowAdd : {
      tooltip : "Add task"
    }
  }
  constructor(
    private dialog : MatDialog,
    private http: HttpClient,
    private reusableFunctionsService : ReusableFunctionsService
    ) {
  }

  ngOnInit() {
    this.http.get('/taskmanagement/list').subscribe((data : {}[])=>{
        this.dataSource = data;
    },(err)=>{
        console.log({status:'KO', data : err});
    })
  }

  add(data?) {
    const dialogRef = this.dialog.open(TaskManagementFormComponent,{
      disableClose : true,
      autoFocus: true,
      width : '500px',
      data : {
        data,
        title : data ? 'Update task' : 'Add task'
      }
    });
    dialogRef.afterClosed().subscribe(
      val => {
        if (this.reusableFunctionsService.isObject(val)) {
          val.type = typeObj[val.typeId];
          val.typeId = +val.typeId;
          this.http.post('/taskmanagement/save',val).subscribe(({message, data}:any)=>{
            this.dataSource = data;
            console.log(message);
          })
          // val.id ? this.dataSource[this.dataSource.findIndex((ob : any)=> (ob.id===val.id))] = val : this.dataSource.unshift(Object.assign(val,{id : +new Date()}));
        }
      }
    );
  }

  delete({id}) {
    this.http.delete('/taskmanagement/delete/'+id).subscribe(({message, data}:any)=>{
      this.dataSource = data;
      console.log(message);
    })
  }

  onInitializeList(event) {
    switch (event.eventName) {
      case "add":
        this.add();
        break;
      case "delete":
        this.delete(event.data);
        break;
      case "edit":
        this.add(event.data);
        break;
    }
  }
}
