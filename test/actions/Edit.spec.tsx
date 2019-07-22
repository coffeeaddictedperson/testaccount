import React from 'react';
import 'mocha';
import * as actions from '../../src/js/actions/Edit';
import {IFieldItems} from "../../src/js/config/userConfig";

describe('Action: Edit Form', () => {
    it('Toggle Edit mode should return {type: TOGGLE_EDIT_MODE}', () => {
        const mockResults: actions.IToggleEditMode = { type: "TOGGLE_EDIT_MODE" };
        const toggleResult: actions.IToggleEditMode = actions.toggleEditMode();
        toggleResult.should.deep.equal(mockResults);
    });
    it('Toggle Edit mode should return {type: UPDATE_FIELD}', () => {
        const editedValues: IFieldItems = {firstName: 'Test'},
            mockResults: actions.IUpdateUserInfo = {
                type: "UPDATE_FIELD",
                editedValues: editedValues
            };

        const toggleResult: actions.IUpdateUserInfo = actions.updateUserInfo(editedValues);
        toggleResult.should.deep.equal(mockResults);
    });
});