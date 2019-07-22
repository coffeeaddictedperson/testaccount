import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-15'
const should = chai.should();

import {IUserDataViewProps, UserDataView, mapStateToProps} from '../../src/js/components/UserDataView';

import PreviewImage from '../../src/js/components/PreviewImage';
import EditButton from '../../src/js/components/EditButton';
import UserStatistic from '../../src/js/components/UserStatistic';
import {UserInfo} from '../../src/js/components/UserInfo';
import {UserGender} from '../../src/js/config/userConfig';
import {IStoreState} from "../../src/js/types";

configure({ adapter: new Adapter() });

describe('UserDataView(Component)', function() {

    const initProps: IUserDataViewProps = {
        gender: UserGender.Female,
        firstName: 'firstName',
        lastName: 'lastName',
        info: 'TestInfo'
    };

    it('Should render child component PreviewImage', function() {
        const wrapper: ShallowWrapper = shallow(<UserDataView />);
        wrapper.find(PreviewImage).should.have.length(1);
    });
    it('Should render child component EditButton', function() {
        const wrapper: ShallowWrapper = shallow(<UserDataView />);
        wrapper.find(EditButton).should.have.length(1);
    });
    it('Should render child component EditButton', function() {
        const wrapper: ShallowWrapper = shallow(<UserDataView />);
        wrapper.find(EditButton).should.have.length(1);
    });
    it('Should render child component UserStatistic', function() {
        const wrapper: ShallowWrapper = shallow(<UserDataView />);
        wrapper.find(UserStatistic).should.have.length(1);
    });
    it('Should render child component EditButton', function() {
        const wrapper: ShallowWrapper = shallow(<UserDataView />);
        wrapper.find(EditButton).should.have.length(1);
    });

    it('Should render child component UserInfo', function() {
        const wrapper: ShallowWrapper = shallow(<UserDataView {...initProps} />);
        const userInfo: ShallowWrapper = wrapper.find(UserInfo);
        const userProps: IUserDataViewProps = userInfo.props();

        userInfo.should.have.length(1);
        userProps.firstName.should.be.equal('firstName');
        userProps.lastName.should.be.equal('lastName');
        userProps.info.should.be.equal('TestInfo');
    });

    it('Should return user\'s balance', () => {
        const testState: IStoreState = Object.assign({isEditMode: false, balance: 10}, initProps);
        mapStateToProps(testState).gender.should.be.equal(UserGender.Female);
    });
});