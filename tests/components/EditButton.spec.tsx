import * as React from 'react';
import 'mocha';
import {EditButton} from "../../src/js/components/EditButton";
import { should } from 'chai';

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