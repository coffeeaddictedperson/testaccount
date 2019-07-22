import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';

import {IBonusesLevel, BonusesLevel} from '../../src/js/components/BonusesLevel';
import {Star} from '../../src/js/components/Star';


describe('BonusesLevel component', () => {
    it('Should render five components "Star"', () => {
        const componentProps: IBonusesLevel = {value: 1};
        const wrapper: ShallowWrapper = shallow(<BonusesLevel {...componentProps} />);
        wrapper.find(Star).should.have.length(5);
    });
});