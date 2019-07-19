export enum FieldTypes {
    Input,
    TextArea,
    Switch
}

export enum UserGender {
    Male = "Male",
    Female = "Female"
}
export enum UserGenderPreview {
    Male = '/images/profile.png',
    Female = '/images/profile-female.png'
}

export interface IFieldItem {
    name: string;
    defaultValue: string;
    label: string;
    type: FieldTypes;
    options?: Array<string>;
}

export interface IFieldItems {
    gender?: UserGender;
    firstName?: string;
    lastName?: string;
    info?: string;
}

export const fieldsConfig:Array<IFieldItem> = [
    {
        name: 'gender',
        defaultValue: UserGender.Male,
        label: 'Gender:',
        options: [UserGender.Male, UserGender.Female],
        type: FieldTypes.Switch
    },
    {
        name: 'firstName',
        defaultValue: '',
        label: 'First name:',
        type: FieldTypes.Input
    },
    {
        name: 'lastName',
        defaultValue: '',
        label: 'Last Name:',
        type: FieldTypes.Input
    },
    {
        name: 'info',
        defaultValue: '',
        label: 'Info:',
        type: FieldTypes.TextArea
    }
];
