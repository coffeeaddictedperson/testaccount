import * as React from 'react';
import {connect } from "react-redux";
import { IStoreState } from '../types';
import UserDataView from './UserDataView';
import UserInfoForm from './UserInfoForm';
import WeatherWidget from './WeatherWidget';

export interface IAppWrapperStateProps { isEditMode: boolean }
export class AppWrapper extends React.Component<IAppWrapperStateProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <div>
                {this.props.isEditMode ? <UserInfoForm /> : <UserDataView/>}
                <WeatherWidget />
            </div>
        );
    }
}

export function mapStateToProps (state: IStoreState): IAppWrapperStateProps {
    return {isEditMode: state.isEditMode}
}
export default connect(mapStateToProps)(AppWrapper);