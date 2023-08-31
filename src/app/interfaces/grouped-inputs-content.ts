import { TextContent } from "./text-content";

export interface GroupedInputsContent {
  type: 'groupedInputs';
  name?: string;
  inputs: TextContent[];
}
