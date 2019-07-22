import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';

import {IBonusesLevel, BonusesLevel} from '../../src/js/components/BonusesLevel';


describe('BonusesLevel component', () => {
    it('Should render AppWrapper component', () => {
        const componentProps: IBonusesLevel = {value: 1};
        const wrapper: ShallowWrapper = shallow(<BonusesLevel {...componentProps} />);



    });
});