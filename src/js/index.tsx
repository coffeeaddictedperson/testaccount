import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { UserGender } from './config/userConfig';
import { IStoreState } from './types/index';
export const store = createStore<IStoreState, any, any, any> (
    rootReducer,
    {
        isEditMode: false,
        gender: UserGender.Female,
        firstName: 'Name',
        lastName: 'Surname',
        info: 'Short description'
    }
);