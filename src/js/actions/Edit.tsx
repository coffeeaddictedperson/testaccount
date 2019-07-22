import {IFieldItems} from '../config/userConfig';
import * as constants from '../constants/action-types';

//interfaces
export interface IToggleEditMode {
    type: constants.TOGGLE_EDIT_MODE;
}
export interface IUpdateFields {
    editedValues: IFieldItems;
}
export interface IUpdateUserInfo extends IUpdateFields {
    type: constants.UPDATE_FIELD;
}

// actions
export function toggleEditMode(): IToggleEditMode {
    return {
        type: constants.TOGGLE_EDIT_MODE
    };
}

export function updateUserInfo(editedValues: IFieldItems): IUpdateUserInfo {
    return {
        type: constants.UPDATE_FIELD,
        editedValues: editedValues
    };
}