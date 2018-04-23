import { Component, OnInit, Inject } from '@angular/core';
//import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector : 'ng-mat-dialog',
	templateUrl : './ng-mat-dialog.component.html',
	styleUrls : ['./ng-mat-dialog.component.css']
})

export class NgMatDialogComponent implements OnInit {
	config = {
        showCancelIcon : true,
		title : "Delete",
		textContent : "Are you sure you want to delete this record?",
		ok : {text : 'Delete', icon : 'delete'},
		cancel : {text : 'Cancel', icon : 'cancel'}
	}
    // form: FormGroup;
    // description:string;

    constructor(
        /*private fb: FormBuilder,*/
        private dialogRef: MatDialogRef<NgMatDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data ) {
    	console.log("MAT_DIALOG_DATA",data)
    	if (data && data.config) {
    		Object.assign(this.config,data.config || {});
    	}


        // this.description = description;


        // this.form = fb.group({
        //     description: [description, Validators.required],
        //     category: [category, Validators.required],
        //     longDescription: [longDescription,Validators.required]
        // });

    }

    ngOnInit() {

    }


    save() {
        this.dialogRef.close({ok : true});
    }

    close() {
        this.dialogRef.close();
    }

}

