export enum FieldTypes {
    Input,
    TextArea
}
export interface IFieldItem {
    name: string;
    defaultValue: string;
    editedValue: string;
    label: string;
    type: FieldTypes;
}

export interface IFieldItems {
    previewImage?: string;
    firstName?: string;
    lastName?: string;
    info?: string;
}

export const fieldsConfig:Array<IFieldItem> = [
    {
        name: 'previewImage',
        defaultValue: '',
        editedValue: '',
        label: 'Preview:',
        type: FieldTypes.Input
    },
    {
        name: 'firstName',
        defaultValue: '',
        editedValue: '',
        label: 'First name:',
        type: FieldTypes.Input
    },
    {
        name: 'lastName',
        defaultValue: '',
        editedValue: '',
        label: 'Last Name:',
        type: FieldTypes.Input
    },
    {
        name: 'info',
        defaultValue: '',
        editedValue: '',
        label: 'Info:',
        type: FieldTypes.TextArea
    }
];
