import * as React from "react";

export interface IStar
{
    value: number
    maxValue: number;
}

export enum StarTypes {
    Star = 'star',
    HalfStar = 'star_half',
    EmptyStar = 'star_border'
}

export class Star extends React.Component<IStar, {}>
{


    public render(): JSX.Element {
        const iconValue: string = this.getIcon(this.props.value, this.props.maxValue);
        return <i className="material-icons">{iconValue}</i>;
    }

    public getIcon(iterator: number, maxValue: number): string {
        let value: string;
        const diff: number = maxValue - iterator;

        if(diff >= 0) {
            value = StarTypes.Star;
        } else if(diff > -1) {
            value = StarTypes.HalfStar;
        } else {
            value = StarTypes.EmptyStar;
        }
        return value;
    }
}
