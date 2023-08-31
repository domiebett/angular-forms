export interface CheckboxContent {
    type: 'checkbox';
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
