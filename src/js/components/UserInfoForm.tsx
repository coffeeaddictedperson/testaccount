import * as React from "react";
import {TextInput, Textarea, Button, Icon, Switch} from 'react-materialize';
import {IStoreState} from '../types';
import {FieldTypes, IFieldItem, IFieldItems, fieldsConfig} from "../config/userConfig";
import {IUpdateFields, updateUserInfo} from "../actions/Edit";
import {connect} from "react-redux";

interface IUserInfoFormDispatchProps {
    handleClickProp: (editedValues: IFieldItems) => void;
}
interface IUserInfoForm extends IUserInfoFormDispatchProps, IFieldItems {}

interface IUserInfoFormState extends IUpdateFields {}


// todo: add city selection
export class UserInfoForm extends React.Component<IUserInfoForm, IUserInfoFormState>
{
    constructor(props: IUserInfoForm){
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
        const fieldProps = this.getFieldProps(itemProps, key);

        switch (itemProps.type) {
            case FieldTypes.TextArea:
                return <Textarea {...fieldProps} />;

            case FieldTypes.Switch:
                return <Switch {...fieldProps} />;

            case FieldTypes.Input:
            default:
                return <TextInput {...fieldProps}/>;
        }
    }

    private getFieldProps (itemProps: IFieldItem, key: number): object {
        const fieldProps: object = {
            key: key,
            name: itemProps.name
        };
        let ownFields: object = {};

        if(itemProps.type === FieldTypes.Switch) {

            const checkSource: string =
                typeof this.state.editedValues[itemProps.name] !== 'undefined'
                    ? this.state.editedValues[itemProps.name]
                    : this.props[itemProps.name]
            ;
            const isChecked = checkSource === itemProps.options[0];
            ownFields = {
                onLabel: itemProps.options[0],
                offLabel: itemProps.options[1],
                checked: isChecked,
                onChange: this.switchField.bind(this)
            }

        } else {
            ownFields = {
                label: itemProps.label,
                defaultValue: this.props[itemProps.name],
                onChange: this.editField.bind(this),
                s: 12
            };
        }

        return Object.assign(fieldProps, ownFields);
    }

    public render(): JSX.Element {

        return (
            <div className="card custom_bg-form">
                <div className="row custom_fields-position">
                    {this.getEditFields().map(this.getField.bind(this))}
                    <div className="custom_align-center">
                        <Button onClick={this.handleOnClick.bind(this)}>
                            <Icon medium>bubble_chart</Icon>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    private editField(e: React.ChangeEvent<HTMLInputElement>): void {
        const editedValues: IFieldItems = this.state.editedValues || {};
        editedValues[e.target.name] = e.target.value;

        this.setState({editedValues: editedValues});
    }

    private switchField(e: React.ChangeEvent<HTMLInputElement>): void {
        const name: string = e.target.name,
            checked: boolean = e.target.checked;

        const item: IFieldItem = fieldsConfig.filter(item => item.name === name)[0];
        const editedValues: IFieldItems = this.state.editedValues || {};

        editedValues[e.target.name] = item.options[checked ? 0 : 1];
        this.setState({editedValues: editedValues});
    }

    private handleOnClick(): void {
        this.props.handleClickProp(this.state.editedValues as IFieldItems);
    }
}


export function mapStateToProps (state: IStoreState): IFieldItems {
    const stateProps = {};
    fieldsConfig.forEach(item => {
        stateProps[item.name] = state[item.name]
    });
    return stateProps as IFieldItems;
}


export function mapDispatchToProps(dispatch: any): IUserInfoFormDispatchProps {
    return {
        handleClickProp: (editedValues) => dispatch(updateUserInfo(editedValues))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);