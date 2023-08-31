import { RadioOption } from "./radio-option";

export interface RadiosContent {
  type: 'radios';
  name: string;
  label: string;
  options: RadioOption[]
}
