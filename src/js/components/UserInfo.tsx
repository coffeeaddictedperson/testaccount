import * as React from "react";

export interface IUserInfo
{
    firstName: string;
    lastName: string;
    info?: string;
}

export class UserInfo extends React.Component<IUserInfo, {}>
{
    public render(): JSX.Element {
        return (
            <div className="custom_pos-rel">
                <span className="card-title">{this.props.firstName} {this.props.lastName}</span>
                <p>{this.props.info}</p>
            </div>
        )
    }
}