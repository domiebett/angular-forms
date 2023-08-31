import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { generateFormGroup } from 'src/app/utils/form.utils';
import { CheckboxContent, CheckboxOption } from 'src/app/interfaces/checkbox-content';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
})
export class AdmissionFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  formContents: Array<FormContent> = [
    {
      name: 'patientName',
      type: 'text',
      label: 'Patients Name',
      placeHolder: 'Enter patients name',
    },
    {
      name: 'hospital',
      type: 'text',
      label: 'Hospital/Institution Referring the Patient',
      placeHolder: 'Hospital/Institution referring the patient',
    },
    {
      name: 'referringDoctor',
      type: 'text',
      label: 'Name of Referring Doctor',
      placeHolder: 'Name of Referring Doctor',
    },
    { type: 'sectionTitle', title: 'Some Title', color: '#000000' },
    {
      name: 'doctorContact',
      type: 'text',
      label: "Doctor's Contact",
      placeHolder: "Doctor's Contact",
    },
    {
      type: 'checkbox',
      name: 'testCheckbox',
      label: 'Pick your checkbox options',
      options: [
        { name: 'changed', label: 'Test 1', value: 'isaTest', checked: true },
        { name: 'test2', label: 'Test 2', value: 'another test', checked: false },
      ],
    },
  ];

  admissionForm = generateFormGroup(this.formBuilder, this.formContents);

  onSave() {}
}
