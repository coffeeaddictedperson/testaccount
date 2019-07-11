import * as React from "react";

export interface IHelloTestProps
{
    test: string;
}

export class Preview extends React.Component<IHelloTestProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <div>
                {this.props.test}
            </div>
        );
    }
}