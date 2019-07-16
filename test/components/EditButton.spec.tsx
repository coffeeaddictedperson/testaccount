import React from 'react';
import {configure, shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';

import * as Sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15'

import {    IEditButtonProps,
            EditButton,
            mapStateToProps, mapDispatchToProps
    } from '../../src/js/components/EditButton';
import { IToggleEditMode, toggleEditMode } from "../../src/js/actions/editMode";
import { IStoreState } from '../../src/js/types/index';


const should = chai.should();

configure({ adapter: new Adapter() });

describe('EditButton(Component)', function() {
    let propsMock: IEditButtonProps;

    beforeEach(() => {
        propsMock = {
            name: 'Test Name',
            handleClickProp: () => {},
            isEditMode: false
        };
    });

    it('Should render empty div for turned_ON EditMode', function() {
        propsMock.isEditMode = true;
        const wrapper: ShallowWrapper    = shallow(<EditButton {...propsMock} />);

        wrapper.children().should.have.length(0);
    });

    it('Should render "Edit" icon', function() {
        const wrapper: ShallowWrapper    = shallow(<EditButton {...propsMock} />);
        const icon: ShallowWrapper       = wrapper.find('.material-icons');

        icon.should.have.length(1);
        icon.text().should.be.equal('edit');
    });

    it('On click should trigger props.method with value opposite to args["IsEditMode"]', function() {
        const spy_handleClick: Sinon.SinonSpy   = Sinon.spy(propsMock, 'handleClickProp');
        const wrapper: ShallowWrapper           = shallow(<EditButton {...propsMock} />);

        wrapper.simulate('click');

        spy_handleClick.calledOnce.should.be.true;
        spy_handleClick.getCall(0).args.should.not.be.equal(propsMock.isEditMode);
    });

    it('MapStateToProps should show previous isEditMode state', function() {
        const initialState = {isEditMode: true};
        const mockState = Sinon.stub(initialState as IStoreState);

        mapStateToProps(mockState).isEditMode.should.be.true;
    });

    it('mapDispatchToProps should call toggleEditMode with args: IToggleEditMode', function() {
        const dispatch: Sinon.SinonSpy      = Sinon.spy();
        const toggleArgs: IToggleEditMode   = toggleEditMode();

        mapDispatchToProps(dispatch).handleClickProp();

        const dispatchArgs: Sinon.SinonSpyCall = dispatch.getCall(0);
        dispatchArgs.lastArg.should.deep.equal(toggleArgs);

    });
});