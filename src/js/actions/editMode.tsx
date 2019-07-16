import * as constants from '../constants/action-types';

//interfaces
export interface IToggleEditMode {
    type: constants.TOGGLE_EDIT_MODE;
}

// actions
export function toggleEditMode(): IToggleEditMode {
    return {
        type: constants.TOGGLE_EDIT_MODE
    };
}