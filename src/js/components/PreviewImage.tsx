import * as React from "react";

import EditButton from './EditButton';

export interface IPreviewImageStateProps {
    previewImage: string
}
export default class PreviewImage extends React.Component<IPreviewImageStateProps, {}>
{
    public render(): JSX.Element {
        return (
            <div className="card-image custom_pos-rel">
                <img src={this.props.previewImage} alt="" />
                <EditButton name={"PreviewImage"} />
            </div>)
    }
}