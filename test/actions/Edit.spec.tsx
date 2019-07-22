import React from 'react';
import 'mocha';
import {IFieldItems} from "../../src/js/config/userConfig";

import {
    IToggleEditMode, toggleEditMode,
    IUpdateUserInfo, updateUserInfo
} from '../../src/js/actions/Edit';


describe('Action: Edit Form', () => {
    it('Toggle Edit mode should return {type: TOGGLE_EDIT_MODE}', () => {
        const mockResults: IToggleEditMode = { type: "TOGGLE_EDIT_MODE" };
        const toggleResult: IToggleEditMode = toggleEditMode();

        toggleResult.should.deep.equal(mockResults);
        toggleResult['type'].should.be.equal('TOGGLE_EDIT_MODE');
    });
    it('Toggle Edit mode should return {type: UPDATE_FIELD}', () => {
        const editedValues: IFieldItems = {firstName: 'Test'},
            mockResults: IUpdateUserInfo = {
                type: "UPDATE_FIELD",
                editedValues: editedValues
            };

        const toggleResult: IUpdateUserInfo = updateUserInfo(editedValues);
        toggleResult.should.deep.equal(mockResults);
        toggleResult['type'].should.be.equal('UPDATE_FIELD');
        toggleResult['editedValues'].firstName.should.be.equal('Test');
    });
});