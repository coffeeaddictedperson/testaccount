import * as React from 'react';
import {connect} from 'react-redux';

import { IStoreState } from '../types/index';
import { toggleEditMode } from '../actions/editMode';

interface IDispatchProps {
    handleClickProp: (isEditMode: boolean) => void
}

interface IEditButtonOwnProps
{
    name: string;
}

export interface IEditButtonProps extends IEditButtonOwnProps, IStoreState, IDispatchProps {};

export class EditButton extends React.Component<IEditButtonProps, {}>
{
    constructor(props: IEditButtonProps) {
        super(props);

        this.state = {};
    }
    public render(): JSX.Element {
        const {name, isEditMode} = this.props;

        if(isEditMode) {
            return (<div />);
        }

        return (
            <button className={`btn-floating halfway-fab waves-effect waves-light teil`}
                name={name}
                onClick={this.handleOnClick.bind(this)}>
                <i className="material-icons">edit</i>
            </button>)
    }

    handleOnClick(): void {
        this.props.handleClickProp(!this.props.isEditMode);
    }
}

function mapStateToProps (state: IStoreState): IStoreState {
    return {isEditMode: state.isEditMode}
}
function mapDispatchToProps(dispatch: any): IDispatchProps {
    return {
        handleClickProp: (isEditMode: boolean) => dispatch(toggleEditMode(isEditMode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);