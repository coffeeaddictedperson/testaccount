import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-15';

import PreviewImage, {PreviewImage as protoPreviewImage} from '../../src/js/components/PreviewImage';
import { UserGender, UserGenderPreview } from '../../src/js/config/userConfig';

const should = chai.should();

configure({ adapter: new Adapter() });

describe('PreviewImage(Component)', function() {

    it('Should render child: image female preview', function() {
        const wrapper: ShallowWrapper   = shallow(<PreviewImage gender={UserGender.Female}/>);
        const image: ShallowWrapper     = wrapper.find('img');

        image.should.have.length(1);
        image.get(0).props['src'].should.be.equal(UserGenderPreview.Female);
    });

    it('Should render child: image with male preview', function() {
        const wrapper: ShallowWrapper   = shallow(<PreviewImage gender={UserGender.Male}/>);
        const image: ShallowWrapper     = wrapper.find('img');

        image.should.have.length(1);
        image.get(0).props['src'].should.be.equal(UserGenderPreview.Male);
    });

    it('Should render child: image', function() {
        const wrapper: ShallowWrapper   = shallow(<PreviewImage gender={UserGender.Male}/>);
        wrapper.render().find('img').should.have.length(1);
    });
});