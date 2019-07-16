import { IToggleEditMode } from '../actions/editMode';
import { IStoreState } from '../types/index';
import { TOGGLE_EDIT_MODE } from '../constants/action-types';

export function toggleEditMode(state: IStoreState, action: IToggleEditMode): IStoreState {
    const stateOut: IStoreState = Object.assign({}, state);

    switch (action.type) {
        case TOGGLE_EDIT_MODE:
            stateOut.isEditMode = !state.isEditMode;
    }

    console.log('@Reduced: stateIn', state, 'stateOut:', stateOut);
    return stateOut;
}