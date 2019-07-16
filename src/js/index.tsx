import { createStore } from 'redux';
import { toggleEditMode } from './reducers/index';
import { IStoreState } from './types/index';
export const store = createStore<IStoreState, any, any, any> (
    toggleEditMode,
    {
        isEditMode: false,
        previewImage: '/images/profile.png'
    }
);