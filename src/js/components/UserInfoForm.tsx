import * as React from "react";
import {TextInput, Textarea, Button, Icon} from 'react-materialize';
import {IStoreState} from './../types/';
import {FieldTypes, IFieldItem, IFieldItems, fieldsConfig} from "../config/userInfo";
import {IUpdateFields, updateUserInfo} from "../actions/editMode";
import {connect} from "react-redux";


interface IUserInfoFormDispatchProps {
    handleClickProp: (editedValues: IFieldItems) => void;
};
interface IUserInfoFormStateProps extends IFieldItems {};
interface IUserInfoForm extends IUserInfoFormDispatchProps, IUserInfoFormStateProps {};

interface IUserInfoFormState extends IUpdateFields {};

export class UserInfoForm extends React.Component<IUserInfoForm, IUserInfoFormState>
{
    constructor(props){
        super(props);
        this.state = {
            editedValues: {}
        };
    }

    private getEditFields(): Array<IFieldItem> {
        return fieldsConfig.map(item => {
            item.defaultValue = this.state[item.name];
            return item;
        });
    }

    private getField (itemProps: IFieldItem, key: number): JSX.Element {
        const fieldProps = {
            key,
            name: itemProps.name,
            label: itemProps.label,
            defaultValue: this.props[itemProps.name] && this.props[itemProps.name] || '',
            onChange: this.editField.bind(this),
            s: 12
        };

        switch (itemProps.type) {
            case FieldTypes.TextArea:
                return <Textarea {...fieldProps}/>;
            case FieldTypes.Input:
            default:
                return <TextInput {...fieldProps}/>;
        }
    }

    public render(): JSX.Element {

        return (
            <div className="card blue-grey lighten-5">
                <div className="row custom_label-pos">
                    <h5 className="custom_title">Please edit your info</h5>
                    {this.getEditFields().map(this.getField.bind(this))}
                </div>
                <Button onClick={this.handleOnClick.bind(this)}>
                    <Icon medium>bubble_chart</Icon>
                    Save
                </Button>
            </div>
        )
    }

    private editField(e: React.ChangeEvent<HTMLInputElement>): void {
        const editedValues: IFieldItems = this.state.editedValues || {};
        editedValues[e.target.name] = e.target.value;

        this.setState({editedValues: editedValues}, () => {
            console.log('editable', this.state);
        });
    }

    private handleOnClick(): void {
        this.props.handleClickProp(this.state.editedValues as IFieldItems);
    }
}


export function mapStateToProps (state: IStoreState): IUserInfoFormStateProps {
    const stateProps = {};
    fieldsConfig.forEach(item => {
        stateProps[item.name] = state[item.name]
    });
    return stateProps as IUserInfoFormStateProps;
}


export function mapDispatchToProps(dispatch: any): IUserInfoFormDispatchProps {
    return {
        handleClickProp: (editedValues) => dispatch(updateUserInfo(editedValues))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);