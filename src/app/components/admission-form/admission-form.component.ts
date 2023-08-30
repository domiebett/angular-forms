import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  formContents: Array<FormContent> = [
    {name: 'patientName', type: 'text', label: 'Patients Name', placeHolder: 'Enter patients name'},
    {name: 'hospital', type: 'text', label: 'Hospital/Institution Referring the Patient', placeHolder: 'Hospital/Institution referring the patient'},
    {name: 'referringDoctor', type: 'text', label: 'Name of Referring Doctor', placeHolder: 'Name of Referring Doctor'},
    {type: 'sectionTitle', title: 'Some Title', color: '#000000'},
    {name: 'doctorContact', type: 'text', label: "Doctor's Contact", placeHolder: "Doctor's Contact"},
  ];

  admissionForm = this.formBuilder.group({
    patientName: ['', Validators.required],
    hospital: ['', Validators.required],
    referringDoctor: ['', Validators.required],
    doctorContact: ['', Validators.required]
  });

  onSave() {

  }
}
