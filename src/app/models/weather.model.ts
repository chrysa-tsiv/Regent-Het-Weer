import { Time } from '@angular/common';

export interface WeatherData {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    description: string;
    days: Array<Days>;
    currentConditions: Array<CurrentConditions>;
}

export interface APIResponse<T>{
    results: Array<T>;
}

export interface Days {
    datetime: Time;
    datetimeEpoch: Time;
    tempmax: number;
    tempmin: number;
    temp: number;
    feelslikemax: number;
    feelslikemin: number;
    feelslike: number;
    dew: number;
    humidity: number;
    precip: number;
    precipprob: number;
    precipcover: number;
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    cloudcover: number;
    visibility: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    severerisk: number;
    sunrise:Time
    sunriseEpoch: number;
    sunset: Time;
    sunsetEpoch: number;
    moonphase: number;
    conditions: string;
    description: string;
    icon: string; 
}

export interface CurrentConditions {
    datetime: Time;
    datetimeEpoch: Time;
    temp: any;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number;
    precipprob: number;
    snow: number; 
    snowdepth: number; 
    preciptype: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    conditions: string;
    icon: string;
    sunrise: string;
    sunriseEpoch: string;
    sunset: string;
    sunsetEpoch: string;
    moonphase: string;
}