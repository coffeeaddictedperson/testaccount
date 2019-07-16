import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';
import * as Sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15'

import {IPreviewImageStateProps, PreviewImage} from '../../src/js/components/PreviewImage';
import EditButton from '../../src/js/components/EditButton';

const should = chai.should();

configure({ adapter: new Adapter() });

describe('PreviewImage(Component)', function() {
    let preview_url: string;
    let wrapper: ShallowWrapper;

    beforeEach(() =>  {
        preview_url = 'test_url';
        wrapper     = shallow(<PreviewImage preview_url={preview_url}/>);
    });

    it('Should render child: image with predefined url', function() {
        const image: ShallowWrapper     = wrapper.find('img');

        image.should.have.length(1);
        image.get(0).props['src'].should.be.equal(preview_url);
    });

    it('Should render child: EditButton', function() {
        wrapper.find(EditButton).should.have.length(1);
    });
});