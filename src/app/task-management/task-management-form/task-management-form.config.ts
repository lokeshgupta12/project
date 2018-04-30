import { Validators } from '@angular/forms';
import { FieldConfig } from '../../reusable_modules/dynamic-form/models/field-config.interface';

export const CONFIG : FieldConfig[] = [
    {
      type: 'input',
      //inputType : 'textarea',
      label: 'Component name',
      name: 'component',
      placeholder: 'Enter component',
      colSize : 12,
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Description',
      name: 'description',
      colSize : 12,
      placeholder: 'Enter description',
      validation: [Validators.minLength(4),Validators.maxLength(140)]
    },
    {
      type: 'select',
      colSize : 6,
      label: 'Type',
      name: 'type',
      options: ['bug', 'feature', 'update'],
      placeholder: '-select type-',
      validation: [Validators.required]
    },
    {
      type: 'select',
      colSize : 6,
      label: 'Status',
      name: 'status',
      options: ['Not yet started', 'Done', 'Pending'],
      placeholder: '-select status-',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ]; 