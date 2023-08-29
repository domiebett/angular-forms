import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-discharge-form',
  templateUrl: './discharge-form.component.html',
  styleUrls: ['./discharge-form.component.css'],
})
export class DischargeFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  
  profileForm = this.formBuilder.group({
    PatientName: ['', Validators.required],
    Age: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['male', Validators.required],
    AdminNo: ['', Validators.required],
    NameOfC: ['', Validators.required],
    Admission: ['', Validators.required],
    Comorbidities: ['', Validators.required],
    Diagnosis: ['', Validators.required],
    History: ['', Validators.required],
    Investigations: ['', Validators.required],
    Labs: ['', Validators.required],
    Management: ['', Validators.required],
    Rom: ['', Validators.required],
    Gait: ['', Validators.required],
    Mobility: ['', Validators.required],
    Motor: ['', Validators.required],
    Occupational: ['', Validators.required],
    Speech: ['', Validators.required],
    Nursing: ['', Validators.required],
    Clinical: ['', Validators.required],
    Medical: ['', Validators.required],
    Instruction: ['', Validators.required],
    Doctor: ['', Validators.required],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
