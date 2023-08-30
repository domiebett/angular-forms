import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() form!: FormGroup;
  @Input() formContents!: any[];

  onSave() {
    this.form.markAllAsTouched();
  }
}
