import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import * as Sinon from 'sinon';
import chai from 'chai';
const should = chai.should();

import {AppWrapper, IAppWrapperStateProps, mapStateToProps} from '../../src/js/components/AppWrapper';

import UserDataView from '../../src/js/components/UserDataView';
import WeatherWidget from '../../src/js/components/WeatherWidget';
import UserInfoForm from '../../src/js/components/UserInfoForm';

import {IStoreState} from "../../src/js/types";

describe('AppWrapper(Component)', function() {

    function getWrapper(isEditMode: boolean):ShallowWrapper  {
        const mockProps: IAppWrapperStateProps  = {isEditMode: isEditMode };
        return shallow(<AppWrapper {...mockProps} />);
    }


    it('Should render child: UserDataView  for edit mode - off', function() {
        const wrapper: ShallowWrapper   = getWrapper(false);

        wrapper.find(UserDataView).should.have.length(1);
        wrapper.find(UserInfoForm).should.have.length(0);
    });

    it('Should render child: WeatherWidget', function() {
        const wrapper: ShallowWrapper   = getWrapper(false);

        getWrapper(false).find(WeatherWidget).should.have.length(1);
    });

    it('Should render child: UserDataForm for edit mode', function() {
        const wrapper: ShallowWrapper   = getWrapper(true);

        wrapper.find(UserDataView).should.have.length(0);
        wrapper.find(UserInfoForm).should.have.length(1);
    });

    it('MapStateToProps should return predefined isEditMode state from state', function() {
        const initialState: IAppWrapperStateProps = {isEditMode: true};
        const mockState: IStoreState = Sinon.stub(initialState as IStoreState);

        mapStateToProps(mockState).isEditMode.should.be.true;
    });

});