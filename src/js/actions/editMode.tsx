import * as constants from '../constants/action-types';

//interfaces
export interface IToggleEditMode {
    type: constants.TOGGLE_EDIT_MODE;
}
export interface IUpdateFieldMethod {
    name: string;
    value: string | number;
}
export interface IUpdateField extends IUpdateFieldMethod {
    type: constants.UPDATE_FIELD;
}

// actions
export function toggleEditMode(): IToggleEditMode {
    return {
        type: constants.TOGGLE_EDIT_MODE
    };
}
export function updateField(props: IUpdateFieldMethod): IUpdateField {
    return {
        type: constants.UPDATE_FIELD,
        name: props.name,
        value: props.value
    };
}