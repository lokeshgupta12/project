import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input col-md-{{config.colSize || '12'}}" 
      [formGroup]="group">
      <div [ngSwitch]="config.inputType">
        <div *ngSwitchCase="'radio'">
          <label>{{config.label}}</label>
            <ng-container *ngFor="let option of config.options">
                <div style="display: inline-block;margin-right:10px;">
                    <input type="radio" [formControlName]="config.name"                        
                        [value]= "option.value"/>{{option.label}}
                </div>
            </ng-container>
        </div>
        <div *ngSwitchDefault>
          <label>{{ config.label }}</label>
          <input
            [attr.type]="config.inputType || 'text'"
            [attr.placeholder]="config.placeholder"
            [formControlName]="config.name">
            <div *ngIf="group.controls[config.name].errors && (group.controls[config.name].touched || group.controls[config.name].dirty)">
              <span class="redItalic" *ngIf="group.controls[config.name].errors.required">{{config.label}} is required!</span>
              <span class="redItalic" *ngIf="group.controls[config.name].errors.minlength">{{config.label}} must be at least {{group.controls[config.name].errors.minlength.requiredLength}} characters!</span>
              <span class="redItalic" *ngIf="group.controls[config.name].errors.maxlength">{{config.label}} must be upto {{group.controls[config.name].errors.maxlength.requiredLength}} characters!</span>
            </div>
        </div>
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
