import { Validators } from '@angular/forms';
import { FieldConfig } from '../../reusable_modules/dynamic-form/models/field-config.interface';

export const CONFIG : FieldConfig[] = [
    {
      type: 'input',
      //inputType : 'textarea',
      label: 'Component name',
      name: 'component',
      placeholder: 'Enter component',
      validation: [Validators.required, Validators.minLength(4)]
    },{
      type: 'input',
      label: 'Description',
      name: 'description',
      placeholder: 'Enter description',
      validation: [Validators.minLength(4),Validators.maxLength(140)]
    },{
      type: 'select',
      colSize : 6,
      label: 'Type',
      name: 'type',
      textField : 'name',
      valueField : 'value',
      options: [{name : 'bug' , value : 1},{name : 'feature' , value : 2},{name : 'update' , value : 3}],
      placeholder: '-select type-',
      validation: [Validators.required]
    },{
      type: 'select',
      colSize : 6,
      label: 'Status',
      name: 'status',
      options: ['Not yet started', 'Done', 'Pending'],
      placeholder: '-select status-',
      validation: [Validators.required]
    },{
      type: 'input',
      inputType: 'radio',
      colSize : 12,
      label: 'Gender',
      value : 'm',
      name: 'gender',
      options: [{value : 'm',label : 'Male',id:1},{value : 'f',label : 'Female',id:2},{value : 'o',label : 'Other',id:3}],
      validation: [Validators.required]
    },{
      //label: 'Submit',
      name: 'Submit',
      type: 'button',
      colSize : 6,
      buttonType : 'submit'
    }/*,{
      name: 'Revert',
      colSize : 6,
      type: 'button',
      buttonType : 'reset'
    }*/
  ]; 