import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { UserGender } from './config/userConfig';
import { IStoreState } from './types';
export const store = createStore<IStoreState, any, any, any> (
    rootReducer,
    {
        isEditMode: false,
        gender: UserGender.Female,
        firstName: 'Name',
        lastName: 'Surname',
        info: 'Short description',

        plan: 'Ultimate',
        balance: 15.05,
        loyalty: 2.3
    }
);