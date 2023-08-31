import { FormBuilder, Validators } from '@angular/forms';
import { CheckboxOption } from '../interfaces/checkbox-content';
import { TextContent } from '../interfaces/text-content';

export function generateFormGroup(
  formBuilder: FormBuilder,
  formContents: any[]
) {
  const groupControls: Record<string, any> = {};
  formContents.forEach((content) => {
    // we dont want to add the title to the form.
    if (content.type === 'contentTitle') return;

    if (content.type === 'checkbox') {
      const checkboxControls: Record<string, any> = {};
      content.options.forEach((option: CheckboxOption) => {
        checkboxControls[option.name] = [option.checked];
      });
      groupControls[content.name] = formBuilder.group(checkboxControls);
    } else if (content.type === 'groupedInputs') {
      const inputControls: Record<string, any> = {};
      content.inputs.forEach((input: TextContent) => {
        groupControls[input.name] = [input.value || '', Validators.required];
      })
    }else {
      groupControls[content.name] = [content.value || '', Validators.required];
    }
  });
  return formBuilder.group(groupControls);
}
