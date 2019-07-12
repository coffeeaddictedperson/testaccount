import * as React from 'react';
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
        this.state = {};
    }

    componentDidMount(): void {
        this.setState({isEditMode: false})
    }

    public render(): JSX.Element
    {
        // @ts-ignore
        const {isEditMode} = this.state;
        return (
            <div className="row">
                <div className={`col l${isEditMode ? 6 : 12}`}>
                    <UserDataView/>
                </div>
                {isEditMode && <div className="col l6"><UserDataView/></div>}
            </div>
        );
    }
}