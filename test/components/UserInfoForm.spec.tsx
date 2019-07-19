import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-15'

import UserInfoForm from '../../src/js/components/UserInfoForm';
import { UserGender, UserGenderPreview } from '../../src/js/config/userConfig';

const should = chai.should();

configure({ adapter: new Adapter() });

describe('UserInfoForm(Component)', function() {

    it('Should change with method editField', function() {

    });

    it('Should render child: image with male preview', function() {

    });
});