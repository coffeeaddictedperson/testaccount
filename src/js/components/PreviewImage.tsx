import * as React from "react";

import EditButton from './EditButton';

interface IPreviewImageStateProps {
    preview_url: string
}


export class PreviewImage extends React.Component<IPreviewImageStateProps, {}>
{
    public render(): JSX.Element {
        return (
            <div className="card-image custom_pos-rel">
                <img src={this.props.preview_url} alt="" />
                <EditButton name={"PreviewImage"} />
            </div>)
    }
}