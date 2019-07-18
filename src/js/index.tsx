import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { IStoreState } from './types/index';
export const store = createStore<IStoreState, any, any, any> (
    rootReducer,
    {
        isEditMode: true,
        previewImage: '/images/profile.png',
        firstName: 'Name',
        lastName: 'Surname',
        info: ''
    }
);