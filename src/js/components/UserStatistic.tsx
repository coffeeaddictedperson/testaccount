import * as React from "react";
import {BonusesLevel} from './BonusesLevel';
import {IUserGeneralData, IStoreState} from "../types";
import {connect} from "react-redux";

export class UserStatistic extends React.Component<IUserGeneralData, IUserGeneralData>
{
    public render(): JSX.Element {
        return (
            <ul>
                {this.props.plan ? <li className='current-plan'>Current Plan: {this.props.plan}</li> : ''}
                <li>Balance: {this.props.balance}$</li>
                {this.props.loyalty ? <li><BonusesLevel value={this.props.loyalty}/></li> : ''}
            </ul>
        )
    }
}

export function mapStateToProps (state: IStoreState): IUserGeneralData {
    const innerState: IUserGeneralData = {balance: state.balance};
    if(state.plan) innerState.plan = state.plan;
    if(state.loyalty) innerState.loyalty = state.loyalty;
    return innerState;
}
export default connect(mapStateToProps)(UserStatistic);