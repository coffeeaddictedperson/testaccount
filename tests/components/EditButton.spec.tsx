import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';

import * as Sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15'

import {IEditButtonProps, EditButton} from '../../src/js/components/EditButton';


const should = chai.should();

configure({ adapter: new Adapter() });

describe('Test: EditButton', function() {

    let propsMock: IEditButtonProps;
    beforeEach(() => {
        propsMock = {
            name: 'Test Name',
            handleClickProp: () => {},
            isEditMode: false
        };
    });


    it('Should have: Edit icon', function() {
        const wrapper: ShallowWrapper    = shallow(<EditButton {...propsMock} />);
        const icon: ShallowWrapper       = wrapper.find('.material-icons');

        // icon: exist
        icon.should.have.length(1);
        // icon: preview
        icon.text().should.be.equal('edit');
    });

    it('On click should trigger method from props with values opposite to args["IsEditMode"]', function() {
        const spy_handleClick: Sinon.SinonSpy    = Sinon.spy(propsMock, 'handleClickProp');
        const wrapper: ShallowWrapper       = shallow(<EditButton {...propsMock} />);
        wrapper.simulate('click');
        spy_handleClick.calledOnce.should.be.true;
        spy_handleClick.getCall(0).args.should.not.be.equal(propsMock.isEditMode);
    });

});