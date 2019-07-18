import * as React from "react";
import './../../styles/UserDataPreview';

import PreviewImage from './PreviewImage';
import {UserInfo} from './UserInfo';
import {UserStatistic} from './UserStatistic';
import { IFieldItems } from "../config/userInfo";
import { IStoreState } from '../types';
import {connect} from "react-redux";

export interface IUserDataViewStateProps extends IFieldItems {};

export interface IUserDataViewProps extends IUserDataViewStateProps {};

export class UserDataView extends React.Component<IUserDataViewProps, {}> {
    public render(): JSX.Element
    {
        console.log('UserDataView', this.props)

        return (
            <div className="card blue-grey darken-1">
                <div className="row">
                    <div className="col s4 l2">
                        <PreviewImage
                            previewImage={this.props.previewImage}/>
                    </div>
                    <div className="col s8 l10">
                        <div className="card-content white-text">
                            <UserInfo firstName={this.props.firstName}
                                      lastName={this.props.lastName}
                                      info={this.props.info} />
                        </div>
                        <div className="card-action white-text">
                            <UserStatistic />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps (state: IStoreState): IUserDataViewStateProps {
    return {
        previewImage: state.previewImage,
        firstName: state.firstName,
        lastName: state.lastName,
        info: state.info
    }
}
export default connect(mapStateToProps)(UserDataView);