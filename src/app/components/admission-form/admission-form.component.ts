import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateRangeContent } from 'src/app/interfaces/date-range-content';
import { GroupedInputsContent } from 'src/app/interfaces/grouped-inputs-content';
import { RadiosContent } from 'src/app/interfaces/radios-content';
import { TextAreaContent } from 'src/app/interfaces/text-area-content';
import { TextContent } from 'src/app/interfaces/text-content';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  formContents: Array<TextContent | TextAreaContent | GroupedInputsContent | DateRangeContent | RadiosContent> = [
    {name: 'patientName', type: 'text', label: 'Patients Name', placeHolder: 'Enter patients name'},
    {name: 'hospital', type: 'text', label: 'Hospital/Institution Referring the Patient', placeHolder: 'Hospital/Institution referring the patient'},
    {name: 'referringDoctor', type: 'text', label: 'Name of Referring Doctor', placeHolder: 'Name of Referring Doctor'},
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
