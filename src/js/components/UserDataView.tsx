import * as React from "react";
import './../../styles/UserDataPreview';

import {PreviewImage} from './PreviewImage';
import {UserInfo} from './UserInfo';
import {UserStatistic} from './UserStatistic';

export interface IUserDataViewProps
{
}

export class UserDataView
    extends React.Component<IUserDataViewProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="card blue-grey darken-1">
                <div className="row">
                    <div className="col s4 l2">
                        <PreviewImage
                            preview_url='/images/profile.png'/>
                    </div>
                    <div className="col s8 l10">
                        <div className="card-content white-text">
                            <UserInfo first_name={"Test"} second_name={"Test"} info={"Test test test test"} />
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
