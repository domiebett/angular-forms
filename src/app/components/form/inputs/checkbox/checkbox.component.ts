import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CheckboxOption } from 'src/app/interfaces/checkbox-content';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() options!: CheckboxOption[];

  checkboxGroup!: any;

  constructor() {}

  getControls(): any {
    return (<FormGroup>this.form.controls[this.name]).controls;
  }
}
