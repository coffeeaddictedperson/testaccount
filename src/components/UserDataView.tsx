import * as React from "react";
import './../styles/UserDataPreview';

export interface IUserDataViewProps
{
    first_name: string;
    second_name: string;
    info?: string;
}

export class UserDataView extends React.Component<IUserDataViewProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="container">
                <div className="card blue-grey darken-1">
                    <div className="row">
                        <div className="col s4 l2">
                            <div className="card-image custom_pos-rel">
                                <img src="/images/profile.png" alt="" />
                                <a className="btn-floating halfway-fab waves-effect waves-light teil">
                                    <i className="material-icons">edit</i>
                                </a>
                            </div>
                        </div>
                        <div className="col s8 l10">
                            <div className="card-content white-text custom_pos-rel">
                                <span className="card-title">{this.props.first_name} {this.props.second_name}</span>
                                <p>{this.props.info}</p>

                                <a className="btn-floating halfway-fab waves-effect waves-light teil">
                                    <i className="material-icons">edit</i>
                                </a>
                            </div>
                            <div className="card-action white-text">
                                <ul>
                                    <li>Current Plan: Ultimate</li>
                                    <li>Balance: 15.04$</li>
                                    <li>
                                        Loyalty bonuses level:

                                        <span className="custom_stars">
                                            <i className="material-icons">star</i>
                                            <i className="material-icons">star</i>
                                            <i className="material-icons">star</i>
                                            <i className="material-icons">star_half</i>
                                            <i className="material-icons">star_border</i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
