import * as React from "react";
import {BonusesLevel} from './BonusesLevel';
import {IUserGeneralData, IStoreState} from "../types";
import {connect} from "react-redux";

export class UserStatistic extends React.Component<IUserGeneralData, IUserGeneralData>
{
    public render(): JSX.Element {
        return (
            <ul>
                <li>Current Plan: {this.props.plan}</li>
                <li>Balance: {this.props.balance}$</li>
                <li>

                    <BonusesLevel value={this.props.loyalty}/>
                </li>
            </ul>
        )
    }
}

function mapStateToProps (state: IStoreState): IUserGeneralData {
    return state as IUserGeneralData;
}
export default connect(mapStateToProps)(UserStatistic);