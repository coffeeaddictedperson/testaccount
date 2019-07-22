import React from 'react';
import 'mocha';
import {shallow, ShallowWrapper} from 'enzyme';

import {StarTypes, Star} from '../../src/js/components/Star';

describe('BonusesLevel component', () => {

    it('Icon Type: should return "star" for exact value', () => {
        const star_icon: string = Star.prototype.getIcon(2, 2);
        star_icon.should.be.equal('star');
    });
    it('Icon Type: should return "star" for bigger value', () => {
        const star_icon: string = Star.prototype.getIcon(2, 2);
        star_icon.should.be.equal('star');
    });

    it('Icon Type: should return "star_half" for difference less then 0.5 point', () => {
        const star_icon: string = Star.prototype.getIcon(1.5, 2);
        star_icon.should.be.equal('star_half');
    });

    it('Icon Type: should return "star_border" for difference bigger then 1 point', () => {
        const star_icon: string = Star.prototype.getIcon(0.5, 2);
        star_icon.should.be.equal('star_border');
    });

    it('Should render icon', () => {
        const wrapper: ShallowWrapper = shallow(<Star iterator={1} userValue={1}/>);
        wrapper.find('.material-icons').should.have.length(1);
    });
});