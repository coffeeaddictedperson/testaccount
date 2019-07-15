import * as React from 'react';
import {connect } from "react-redux";
import { store } from "../index";
import { IStoreState } from '../types';
import { UserDataView } from './UserDataView';

interface IOwnAppWrapperProps {

}

interface IAppWrapper extends IOwnAppWrapperProps, IStoreState {};


class ConnectAppWrapper extends React.Component<IAppWrapper, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="row">
                <div className={`col l${this.props.isEditMode ? 6 : 12}`}>
                    <UserDataView/>
                </div>
                {this.props.isEditMode && <div className="col l6"><UserDataView/></div>}
            </div>
        );
    }
}

function mapStateToProps (state: IStoreState): IStoreState {
    return {isEditMode: state.isEditMode}
}
export const AppWrapper = connect(mapStateToProps)(ConnectAppWrapper);