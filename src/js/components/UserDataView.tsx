import * as React from "react";

import PreviewImage from './PreviewImage';
import {UserInfo} from './UserInfo';
import UserStatistic from './UserStatistic';
import { IFieldItems } from "../config/userConfig";
import { IStoreState } from '../types';
import {connect} from "react-redux";
import EditButton from "./EditButton";

export interface IUserDataViewProps extends IFieldItems {}

export class UserDataView extends React.Component<IUserDataViewProps, {}> {
    public render(): JSX.Element
    {
        return (
            <div className="card custom_bg">
                <div className="row">
                    <div className="col s4 l2 custom_pos-rel">
                        <PreviewImage gender={this.props.gender} />
                        <EditButton name={"PreviewImage"} />
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

export function mapStateToProps (state: IStoreState): IUserDataViewProps {
    return {
        gender: state.gender,
        firstName: state.firstName,
        lastName: state.lastName,
        info: state.info
    }
}
export default connect(mapStateToProps)(UserDataView);