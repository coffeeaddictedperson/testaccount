import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';
import * as Sinon from 'sinon';

import {IUserGeneralData, IStoreState} from "../../src/js/types";
import {UserStatistic, mapStateToProps} from '../../src/js/components/UserStatistic';
import {BonusesLevel} from '../../src/js/components/BonusesLevel';
import {SinonMock} from "sinon";

describe('UserStatistic component', () => {

    it('Should render list with three points', () => {
        const usProps: IUserGeneralData = {plan: 'Test', balance: 42, loyalty: 1.3};
        const wrapper: ShallowWrapper = shallow(<UserStatistic {...usProps}/>);
        wrapper.find('li').should.have.length(3);
    });

    it('Shouldn\'t render point "Plan"', () => {
        const usProps: IUserGeneralData = {balance: 42};
        const wrapper: ShallowWrapper = shallow(<UserStatistic {...usProps}/>);
        wrapper.find('.current-plan').should.have.length(0);
    });

    it('Shouldn\'t render BonusLevel component', () => {
        const usProps: IUserGeneralData = {balance: 42};
        const wrapper: ShallowWrapper = shallow(<UserStatistic {...usProps}/>);
        wrapper.find(BonusesLevel).should.have.length(0);
    });

    it('Should render only one point: Balance', () => {
        const usProps: IUserGeneralData = {balance: 42};
        const wrapper: ShallowWrapper = shallow(<UserStatistic {...usProps}/>);
        wrapper.find('li').should.have.length(1);
    });

    it('Should return user\'s plan', () => {
        const compareState: IUserGeneralData = { plan: 'Test', balance: 10};
        const testState: IStoreState = Object.assign({isEditMode: false}, compareState);
        mapStateToProps(testState).plan.should.be.equal('Test');
    });
    it('Should return user\'s loyalty', () => {
        const compareState: IUserGeneralData = {balance: 10, loyalty: 1};
        const testState: IStoreState = Object.assign({isEditMode: false}, compareState);
        mapStateToProps(testState).loyalty.should.be.equal(1);
    });
    it('Should return user\'s balance', () => {
        const compareState: IUserGeneralData = { balance: 10 };
        const testState: IStoreState = Object.assign({isEditMode: false}, compareState);
        mapStateToProps(testState).balance.should.be.equal(10);
    });
});