import * as React from "react";
import {EditButton} from './EditButton';

export interface IUserInfo
{
    first_name: string;
    second_name: string;
    info?: string;
}

export class UserInfo extends React.Component<IUserInfo, {}>
{
    public render(): JSX.Element {
        return (
            <div className="custom_pos-rel">
                <span className="card-title">{this.props.first_name} {this.props.second_name}</span>
                <p>{this.props.info}</p>

                <EditButton name={"UserInfo"} />
            </div>
        )
    }
}