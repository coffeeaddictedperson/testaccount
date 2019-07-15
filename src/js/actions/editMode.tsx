import * as constants from '../constants/action-types';

//interfaces
export interface IToggleEditMode {
    type: constants.TOGGLE_EDIT_MODE;
    isEditMode: boolean;
}

// actions
export function toggleEditMode(isEM: boolean): IToggleEditMode {
    return {
        type: constants.TOGGLE_EDIT_MODE,
        isEditMode: isEM
    };
}