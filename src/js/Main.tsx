import * as React from 'react';
import {Provider} from "react-redux";
import { store } from "./index";
import AppWrapper from "./components/AppWrapper";

export default class Main extends React.Component<{}, {}>
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