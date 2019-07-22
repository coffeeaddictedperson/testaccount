import * as React from 'react';
import {connect } from "react-redux";
import { IStoreState } from '../types';
import UserDataView from './UserDataView';
import UserInfoForm from './UserInfoForm';
import {WeatherWidget} from './WeatherWidget';

interface IOwnAppWrapperProps { }
interface IStateProps { isEditMode: boolean }
interface IAppWrapper extends IOwnAppWrapperProps, IStateProps {}

export class AppWrapper extends React.Component<IAppWrapper, {}>
{
    public render(): JSX.Element
    {
        return (
            <div>
                <div className="row">
                    <div className={`col l${this.props.isEditMode ? 7 : 12} s12`}>
                        <UserDataView/>
                    </div>
                    {this.props.isEditMode ? <div className="col l5 s12"><UserInfoForm /></div> : ''}
                </div>
                <div className="row">
                    <WeatherWidget />
                </div>
            </div>
        );
    }
}

function mapStateToProps (state: IStoreState): IStateProps {
    return {isEditMode: state.isEditMode}
}
export default connect(mapStateToProps)(AppWrapper);