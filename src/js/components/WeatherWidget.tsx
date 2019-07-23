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

        if(error || !isLoaded) {
            return null;
        }

        return (
            <div className={`row custom_weather ${general ? general.toLowerCase() : ''}`}>
                <div className="col l2">
                    {icon && <div className="custom_weather-icon"><img src={this.getIcon(icon)} alt={icon} /></div>}
                </div>
                <div className="col l6 custom_weather-text">{temp} °C <br/> {description}</div>
                <div className="col l4">
                    Sunrise: {sunrise && this.getFormattedTime(sunrise)} <br/>
                    Sunset: {sunset && this.getFormattedTime(sunset)}
                </div>
            </div>
        );
    }

    getIcon(icon: string): string {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }

    getFormattedTime(UNIX_timestamp: number): string {
        const a = new Date(UNIX_timestamp * 1000),
            hour = this.addLeadZero(a.getHours()),
            min = this.addLeadZero(a.getMinutes()),
            sec = this.addLeadZero(a.getSeconds());

        return `${hour}:${min}:${sec}`;
    }

    addLeadZero(int: number): string {
        return `${int < 10 ? '0' : ''}${int}`;
    }

    getApiEndpoint():string {
        return '/get-weather';
    }

    getWeather() {
        return fetch(this.getApiEndpoint())
            .then(res => res.json())
            .then(this.handleResponse.bind(this), this.handleError.bind(this))
    }

    handleResponse(result: IWeatherWidgetData): void {
        this.setState({
            isLoaded: true,
            general: result.general || null,
            description: result.description || null,
            icon: result.icon || null,
            temp: result.temp || null,
            sunset: result.sunset || null,
            sunrise: result.sunrise || null
        });
    }
    handleError(error): void {
        this.setState({
            isLoaded: true,
            error
        });
    }

    componentDidMount() {
        this.getWeather();
    }
}

/*
// todo: add city selection
function mapStateToProps (state: IStoreState): IWeatherWidgetStateProps {
    return {}
}
export default connect(mapStateToProps)(WeatherWidget);
*/

export default WeatherWidget;