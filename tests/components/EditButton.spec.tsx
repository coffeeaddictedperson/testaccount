import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { EditButton } from '../../src/js/components/EditButton';
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() });
describe('Test: EditButton', function() {


    it('Should have: Edit icon', function() {
        const wrapper = shallow(<EditButton name={'Test Name'} />);
        const icon = wrapper.find('.material-icons');
        // icon: exist
        expect(icon).to.have.lengthOf(1);
        // icon: preview
        expect(icon.text()).to.be.equal('edit');
    });

    it('Should have predefined property "name"', function() {
        const wrapper = shallow(<EditButton name={'Test Name'} />);
        expect(wrapper.props().name).to.equal('Test Name');
    });

    it('Should return .name value', function() {
        const wrapper = shallow(<EditButton name={'Test Name'} />);
        wrapper.simulate('click');
        // todo: check handleOnClick
    });

});