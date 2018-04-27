import { Validators } from '@angular/forms';
import { FieldConfig } from '../../reusable_modules/dynamic-form/models/field-config.interface';

export const CONFIG : FieldConfig[] = [
    {
      type: 'input',
      label: 'Component name',
      name: 'component',
      placeholder: 'Enter component',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Type',
      name: 'type',
      options: ['bug', 'feature', 'update'],
      placeholder: '-select type-',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Description',
      name: 'description',
      placeholder: 'Enter description',
      validation: [Validators.minLength(4),Validators.maxLength(140)]
    },
    {
      type: 'select',
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