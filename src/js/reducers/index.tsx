import { IToggleEditMode, IUpdateUserInfo } from '../actions/Edit';
import { IStoreState } from '../types/index';
import { TOGGLE_EDIT_MODE, UPDATE_FIELD } from '../constants/action-types';

type IMergedTypes = IToggleEditMode | IUpdateUserInfo;

export function rootReducer(state: IStoreState, action: IMergedTypes ): IStoreState {
    const stateOut: IStoreState = Object.assign({}, state);

    switch (action.type) {
        case UPDATE_FIELD:
            stateOut.isEditMode = false;
            console.log(action)
            Object.assign(stateOut, action.editedValues);
            break;

        case TOGGLE_EDIT_MODE:
            stateOut.isEditMode = !state.isEditMode;
            break;

    }

    console.log('@Reduced: stateIn', state, 'stateOut:', stateOut);
    return stateOut;
}