import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';
import * as Sinon from 'sinon';

import {IStar, StarTypes, Star} from '../../src/js/components/Star';


describe.only('BonusesLevel component', () => {

    it('Icon Type: getIcon should return "star" for exact value', () => {
        const star_icon: string = Star.prototype.getIcon(1,1);
        star_icon.should.be.equal('star');
    });
    it('Icon Type: getIcon should return "star" for bigger value', () => {
        const star_icon: string = Star.prototype.getIcon(1,2);
        star_icon.should.be.equal('star');
    });

    it('Icon Type: getIcon should return "star" for bigger value', () => {
        const star_icon: string = Star.prototype.getIcon(1.5,2);
        star_icon.should.be.equal('star_half');
    });



   /* it('Should render star icon (less value)', () => {
        const componentProps: IStar = {value: 1, maxValue: 2};
        const wrapper: ShallowWrapper = shallow(<Star {...componentProps} />);
        wrapper.text().should.be.equal(StarTypes.Star);
    });

    it('Should render half star icon', () => {
        const componentProps: IStar = {value: 1, maxValue: 0.5};
        const wrapper: ShallowWrapper = shallow(<Star {...componentProps} />);
        wrapper.text().should.be.equal(StarTypes.HalfStar);
    }); */
});