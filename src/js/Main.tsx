import * as React from 'react';
import {Provider} from "react-redux";
import { store } from "./index";
import {AppWrapper} from "./components/AppWrapper";

interface IMain {

}
export class Main extends React.Component<IMain, {}>
{
    public render(): JSX.Element
    {
        return (
            <Provider store={store}>
                <AppWrapper />
            </Provider>
        );
    }
}