import * as React from "react";

import { UserGender, UserGenderPreview } from '../config/userConfig';

export interface IPreviewImageStateProps {
    gender: UserGender;
}
export default class PreviewImage extends React.Component<IPreviewImageStateProps, {}>
{
    public render(): JSX.Element {
        return (
            <div className="card-image custom_pos-rel">
                <img src={this.getPreview()} alt="" />
            </div>)
    }

    private getPreview() {
        const gender = this.props.gender;
        switch (gender){
            case UserGender.Female:
                return UserGenderPreview.Female;
            case UserGender.Male:
            default:
                return UserGenderPreview.Male;
        }
    }
}