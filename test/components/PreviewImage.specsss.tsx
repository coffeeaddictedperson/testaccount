/*import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-15'

import PreviewImage from '../../src/js/components/PreviewImage';
import EditButton from '../../src/js/components/EditButton';

const should = chai.should();

configure({ adapter: new Adapter() });

describe('PreviewImage(Component)', function() {
    let previewImage: string;
    let wrapper: ShallowWrapper;

    beforeEach(() =>  {
        previewImage = 'test_url';
        wrapper     = shallow(<PreviewImage previewImage={previewImage}/>);
    });

    it('Should render child: image with predefined url', function() {
        const image: ShallowWrapper     = wrapper.find('img');

        image.should.have.length(1);
        image.get(0).props['src'].should.be.equal(previewImage);
    });

    it('Should render child: EditButton', function() {
        wrapper.find(EditButton).should.have.length(1);
    });
});*/