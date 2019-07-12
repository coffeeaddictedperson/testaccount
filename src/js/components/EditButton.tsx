import * as React from "react";
export interface IEditButtonProps
{
    name: string;
}

export class EditButton extends React.Component<IEditButtonProps, {}>
{
    public render(): JSX.Element {
        return (
            <button className="btn-floating halfway-fab waves-effect waves-light teil"
                onClick={this.handleOnClick.bind(this)}>
                <i className="material-icons">edit</i>
            </button>)
    }

    handleOnClick(): string {
        return this.props.name;
    }
}