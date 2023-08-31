export interface CheckboxContent {
    type: string;
    name: string;
    label: string;
    options: CheckboxOption[];
}

export interface CheckboxOption {
    label: string;
    value: string;
    checked: boolean;
    name: string;
}
