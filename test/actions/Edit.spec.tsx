import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';

import {IToggleEditMode, toggleEditMode, updateUserInfo} from '../../src/js/actions/Edit';
import * as constants from "../../src/js/constants/action-types";


describe('Action: Edit Form', () => {
    it.only('Toggle Edit mode should return {type: TOGGLE_EDIT_MODE}', () => {
        const mockResults: IToggleEditMode = { type: "TOGGLE_EDIT_MODE" };
        const toggleResult: IToggleEditMode = toggleEditMode();
        toggleResult.should.deep.equal(mockResults);
    });
});