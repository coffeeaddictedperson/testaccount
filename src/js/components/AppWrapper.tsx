import * as React from 'react';
import {connect } from "react-redux";
import { IStoreState } from '../types';
import UserDataView from './UserDataView';
import UserInfoForm from './UserInfoForm';

interface IOwnAppWrapperProps { }
interface IStateProps { isEditMode: boolean };
interface IAppWrapper extends IOwnAppWrapperProps, IStateProps {};

export class AppWrapper extends React.Component<IAppWrapper, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="row">
                <div className={`col l${this.props.isEditMode ? 6 : 12}`}>
                    <UserDataView/>
                </div>
                {this.props.isEditMode ? <div className="col l6"><UserInfoForm /></div> : ''}
            </div>
        );
    }
}

function mapStateToProps (state: IStoreState): IStateProps {
    return {isEditMode: state.isEditMode}
}
export default connect(mapStateToProps)(AppWrapper);