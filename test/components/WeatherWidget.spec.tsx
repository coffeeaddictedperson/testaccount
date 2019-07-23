import React, {Component} from 'react';
import 'mocha';


import {shallow, ShallowWrapper} from 'enzyme';
import chai from 'chai';
import chaiFetchMock from 'chai-fetch-mock';
import fetchMock from 'fetch-mock';
const should  = chai.should();

chai.use(chaiFetchMock);

import {WeatherWidget} from '../../src/js/components/WeatherWidget';
import * as Sinon from "sinon";

describe('WeatherWidget component', function(){
    const apiUri: string = '/get-weather';



    it('Should render empty block for fetch error', (done) => {
        fetchMock.get(apiUri, { throws: { message: 'network error' } });
        const wrapper: ShallowWrapper = shallow(<WeatherWidget />);
        wrapper.update();
        wrapper.should.be.empty;
        done();
    });

    it('Should render weather icon', (done) => {
        fetchMock.get(apiUri, {icon: 'test'});
        const wrapper: ShallowWrapper = shallow(<WeatherWidget />);

        setTimeout(() => {
            wrapper.update();
            wrapper.find('img').should.have.length(1);
            done();
        });
    });

    it('Should render description', (done) => {
        fetchMock.get(apiUri, {description: 'TestDescription'});
        const wrapper: ShallowWrapper = shallow(<WeatherWidget />);

        setTimeout(() => {
            wrapper.update();
            wrapper.text().should.include('TestDescription');
            done();
        });
    });

    it('Should convert UNIX_timestamp to time (hh:mm:ss)', () => {
        const time: string = WeatherWidget.prototype.getFormattedTime(1563874267827),
            expectedTime: string = '16:50:27';
        time.should.be.equal(expectedTime);
    });

    it('Should return icon uri', () => {
        const icon: string = WeatherWidget.prototype.getIcon('test'),
            expectedIcon: string = 'http://openweathermap.org/img/wn/test@2x.png';
        icon.should.be.equal(expectedIcon);
    });

    it('Should return number with leadZero', () => {
        const belowTen: string = WeatherWidget.prototype.addLeadZero(7),
            aboveTen: string = WeatherWidget.prototype.addLeadZero(11);
        belowTen.should.be.equal('07');
        aboveTen.should.be.equal('11')
    });

    it('Should render component', (done) => {

        fetchMock.get(apiUri, {});
        const initState = {
            isLoaded: true,
            icon: 'test',
            temp: 15,
            description: 'Info'
        };

        const wrapper: ShallowWrapper = shallow(<WeatherWidget />);
        wrapper.setState(initState);

        // icon
        const widgetIcon =  wrapper.render().find('.custom_weather-icon img');
        widgetIcon.should.have.length(1);
        widgetIcon.prop('alt').should.be.equal('test');

        // description
        const description: string = wrapper.render().find('.custom_weather-text')
            .text().replace(/  /g, ' ');
        description.should.be.equal(`${initState.temp} °C ${initState.description}`);

        done();
    });


    it('Should handleResponse', function(done) {

        const response = {
                general: 'testGeneral',
                description: 'testDescription',
                icon: 'testIcon',
                temp: 42,
                sunset: 1563874267827,
                sunrise: 1563874267827
            },
            testState = Object.assign({isLoaded: true}, response);

        fetchMock.get(apiUri, {});


        const stub_setState = Sinon.stub(WeatherWidget.prototype, 'setState');
        WeatherWidget.prototype.handleResponse(response);

        stub_setState.calledOnce.should.be.true;
        stub_setState.getCall(0).args[0].should.be.deep.equal(testState);

        stub_setState.restore();
        done();
    });

    it('Should handleError', function(done){

        const error = {test: 'testError'},
            testState = Object.assign({isLoaded: true}, {error: error});

        fetchMock.get(apiUri, {});
        const stub_setState = Sinon.stub(WeatherWidget.prototype, 'setState');
        WeatherWidget.prototype.handleError(error);

        stub_setState.calledOnce.should.be.true;
        stub_setState.getCall(0).args[0].should.be.deep.equal(testState);

        stub_setState.restore();
        done();
    });


    afterEach(() => {
        fetchMock.restore();
    });

});
