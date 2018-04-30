import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [attr.type]="config.inputType || 'text'"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
        <div *ngIf="group.controls[config.name].errors && group.controls[config.name].touched">
          <span class="redItalic" *ngIf="group.controls[config.name].errors.required">{{config.label}} is required!</span>
          <span class="redItalic" *ngIf="group.controls[config.name].errors.minlength">{{config.label}} must be at least {{group.controls[config.name].errors.minlength.requiredLength}} characters!</span>
          <span class="redItalic" *ngIf="group.controls[config.name].errors.maxlength">{{config.label}} must be upto {{group.controls[config.name].errors.maxlength.requiredLength}} characters!</span>
        </div>
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
