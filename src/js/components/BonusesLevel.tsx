import * as React from "react";

export interface IBonusesLevel
{
    value: number
}


export class BonusesLevel extends React.Component<IBonusesLevel, {}>
{
    public render(): JSX.Element {
        return (
            <span className="custom_stars">
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star_half</i>
                <i className="material-icons">star_border</i>
            </span>
        )
    }
}