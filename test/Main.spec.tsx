import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';

import Main from '../src/js/Main';
import AppWrapper from '../src/js/components/AppWrapper';


describe('Main component', () => {
    it('Should render AppWrapper component', () => {
        const wrapper: ShallowWrapper = shallow(<Main />);
        wrapper.find(AppWrapper).should.have.length(1);
    });
});