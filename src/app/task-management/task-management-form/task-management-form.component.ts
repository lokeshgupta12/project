import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CONFIG } from './task-management-form.config';

import { DynamicFormComponent } from '../../reusable_modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
//import { FieldConfig } from '../../reusable_components/dynamic-form/models/field-config.interface';


@Component({
	selector : 'app-task-management-form',
	templateUrl : './task-management-form.component.html',
	//styleUrls : ['./task-management-form.component.css']
})

export class TaskManagementFormComponent implements AfterViewInit {
	@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  data = {
    component: "",
    description: "",
    type: "",
    status: ""
  };
  config = CONFIG;
  title : string = '';

  constructor(private dialogRef: MatDialogRef<TaskManagementFormComponent>,
        @Inject(MAT_DIALOG_DATA) {data, title}) {
    data && Object.assign(this.data,data);
    this.title = title;
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
    setTimeout(()=>{
      this.form.setDisabled('submit', true);
      //this.form.disableAll(true);
      // this.form.setDisabled('description', true);
      // this.form.setDisabled('component', true);
      // this.form.setDisabled('type', true);
      // this.form.setDisabled('status', true);

      this.form.patchValue(this.data);

      //this.form.setValue('name', 'Todd Motto');
    },0)
  }
  //isFooterRow = (_, rowData) => rowData.isFooterRow;
  submit(value: {[name: string]: any}) {
    this.dialogRef.close(Object.assign(this.data,value));
  }
}