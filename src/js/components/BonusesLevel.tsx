import * as React from "react";
import {Star} from "./Star";

export interface IBonusesLevel { value: number }

export class BonusesLevel extends React.Component<IBonusesLevel, {}>
{

    public render(): JSX.Element {
        return (
            <span className="custom_stars">
                {
                    Array
                        .from(
                            {length: 5},
                            (x,i) => i + 1)
                        .map((x,i):JSX.Element => <Star key={x} value={x} maxValue={this.props.value} />)
                }
            </span>
        )
    }
}