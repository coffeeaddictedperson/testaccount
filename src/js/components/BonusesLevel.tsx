import * as React from "react";

export interface IBonusesLevel
{
    value: number
}


export class BonusesLevel extends React.Component<IBonusesLevel, {}>
{
    public render(): JSX.Element {
        return (
            <ul>
                <li>Current Plan: Ultimate</li>
                <li>Balance: 15.04$</li>
                <li>
                    Loyalty bonuses level {this.props.value}:
                    <span className="custom_stars">
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                        <i className="material-icons">star_border</i>
                    </span>
                </li>
            </ul>
        )
    }
}