import * as React from 'react';
import {connect } from 'react-redux';
import { IStoreState } from '../types';

interface IWeatherWidgetStateProps { }
interface IWeatherWidgetProps extends IWeatherWidgetStateProps, IWeatherWidgetStateProps { }


interface IWeatherWidgetData {
    error?: string;
    icon?: string;
    temp?: number;
    sunset?: number;
    sunrise?: number;
    description?: string;
    general?: string;
}

interface IWeatherWidgetState extends IWeatherWidgetData {
    isLoaded: boolean;
}

export class WeatherWidget extends React.Component<IWeatherWidgetProps, IWeatherWidgetState>
{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
    }
    public render(): JSX.Element
    {
        const { error, isLoaded,general, description, icon, temp, sunset, sunrise } = this.state;

        if(error) return null;

        if(!isLoaded) return <div>...</div>;

        return (
            <div className={`row custom_weather ${general && general.toLowerCase()}`}>
                <div className="col l2">
                    {icon && <div className="custom_weather-icon"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /></div>}
                </div>
                <div className="col l4 custom_weather-text">{temp} °C <br/> {description}</div>
                <div className="col l6">
                    Sunrise: {sunrise && this.getTime(sunrise)} <br/>
                    Sunset: {sunset && this.getTime(sunset)}
                </div>
            </div>
        );
    }

    private getTime(UNIX_timestamp: number): string {
        const a = new Date(UNIX_timestamp * 1000),
            hour = this.addLeadZero(a.getHours()),
            min = this.addLeadZero(a.getMinutes()),
            sec = this.addLeadZero(a.getSeconds());

        return `${hour}:${min}:${sec}`;
    }
    private addLeadZero(int: number): string {
        return `${int < 10 ? '0' : ''}${int}`;
    }

    private getApiEndpoint():string {
        return '/get-weather';
    }

    private getWeather() {
        fetch(this.getApiEndpoint())
            .then(res => res.json())
            .then(this.handleResponse.bind(this), this.handleError.bind(this))
    }

    private handleResponse(result: IWeatherWidgetData): void {

        this.setState({
            isLoaded: true,
            general: result.general,
            description: result.description,
            icon: result.icon,
            temp: result.temp,
            sunset: result.sunset,
            sunrise: result.sunrise
        });
    }
    private handleError(error): void {
        this.setState({
            isLoaded: true,
            error
        });
    }

    componentDidMount() {
        this.getWeather();
    }


}

function mapStateToProps (state: IStoreState): IWeatherWidgetStateProps {
    return {}
}
export default connect(mapStateToProps)(WeatherWidget);