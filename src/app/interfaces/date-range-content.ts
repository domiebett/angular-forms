import { DateRangeInput } from "./date-range-input";

export interface DateRangeContent {
  type: 'dateRange';
  name?: string;
  label: string;
  hint?: string;
  inputs: DateRangeInput;
}
