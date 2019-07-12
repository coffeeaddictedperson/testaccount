import * as React from "react";
import {BonusesLevel} from './BonusesLevel';

export interface IUserStatistic
{
}


export class UserStatistic extends React.Component<IUserStatistic, {}>
{
    public render(): JSX.Element {
        return (
            <ul>
                <li>Current Plan: Ultimate</li>
                <li>Balance: 15.04$</li>
                <li>
                    Loyalty bonuses level:
                    <BonusesLevel value={4.5}/>
                </li>
            </ul>
        )
    }
}