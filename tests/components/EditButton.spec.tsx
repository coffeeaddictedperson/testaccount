import * as React from 'react';
import chai from 'chai';
const should = chai.should();

import {EditButton} from "../../src/js/components/EditButton";

describe('Components', function() {
    describe('EditButton', function() {
        let _button: JSX.Element;
        beforeEach(function(){
            _button = <EditButton name={"TestButton"} />;
        });

        it('should render button', function() {
            _button.should.not.be.null;
        })
    })
});