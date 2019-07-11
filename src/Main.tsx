import * as React from 'react';
// import { Preview } from './components/Preview';
import { UserDataView } from './components/UserDataView';
import { App } from './App';
export interface IMainProps
{
    app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
    constructor(props: IMainProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <div>
                Main app
                <br />
                <UserDataView
                    first_name="Test"
                    second_name="Test"
                    info="Short description"
                />
            </div>
        );
    }
}