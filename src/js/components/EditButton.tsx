import * as React from 'react';
import {connect} from 'react-redux';

import { IStoreState } from '../types/index';
import { toggleEditMode } from '../actions/Edit';

interface IEditButtonDispatchProps { handleClickProp: () => void }
interface IEditButtonOwnProps { name: string; }

export interface IEditButtonStateProps { isEditMode: boolean }
export interface IEditButtonProps extends IEditButtonOwnProps, IEditButtonStateProps, IEditButtonDispatchProps {};

export class EditButton extends React.Component<IEditButtonProps, {}>
{
    constructor(props: IEditButtonProps) {
        super(props);

        this.state = {};
    }
    public render(): JSX.Element {
        const {name, isEditMode} = this.props;

        if(isEditMode) {
            return (null);
        }

        return (
            <button className={`btn-floating halfway-fab waves-effect waves-light teil`}
                name={name}
                onClick={this.handleOnClick.bind(this)}>
                <i className="material-icons">edit</i>
            </button>)
    }

    handleOnClick(): void {
        this.props.handleClickProp();
    }
}

export function mapStateToProps (state: IStoreState): IEditButtonStateProps {
    return {isEditMode: state.isEditMode}
}
export function mapDispatchToProps(dispatch: any): IEditButtonDispatchProps {
    return {
        handleClickProp: () => {
            return dispatch(toggleEditMode())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);