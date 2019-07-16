import * as React from "react";
import {TextInput, Button} from 'react-materialize';
import {IStoreState} from './../types/';
import {IUpdateFieldMethod, updateField} from "../actions/editMode";
import {connect} from "react-redux";


interface IUserInfoFormDispatchProps {}
interface IUserInfoFormStateProps {}
interface IUserInfoForm {

}

export class UserInfoForm extends React.Component<IUserInfoForm, {}>
{
    public render(): JSX.Element {
        return (
            <div className="card blue-grey lighten-5">
                <div className="container">
                    <div className="row custom_label-pos">
                        <TextInput
                            label="Preview Url:"
                            name="preview"
                            s={12}
                            onChange={this.editField.bind(this)}
                            defaultValue={'test'}  />
                    </div>
                </div>
            </div>
        )
    }

    private editField(e: Event): void {
        const name = e.target.name,
            value = e.target.value;

    }
}


export function mapStateToProps (state: IStoreState): IUserInfoFormStateProps {
    return {
        //isEditMode: state.isEditMode
    }
}
export function mapDispatchToProps(dispatch: any): IUserInfoFormDispatchProps {
    return {
        // handleClickProp: () => dispatch(updateField())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);