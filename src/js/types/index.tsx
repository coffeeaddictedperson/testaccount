import {IFieldItems} from "../config/userConfig";

export interface IUserGeneralData {
    plan?: string;
    balance?: number;
    loyalty?: number;
}
export interface IStoreState extends IFieldItems, IUserGeneralData {
    isEditMode: boolean;
}