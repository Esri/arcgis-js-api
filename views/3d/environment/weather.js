/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./CloudyWeather.js";import o from"./FoggyWeather.js";import r from"./RainyWeather.js";import t from"./SnowyWeather.js";import n from"./SunnyWeather.js";const i={key:"type",base:n,typeMap:{sunny:n,cloudy:e,rainy:r,snowy:t,foggy:o}},c=Object.keys(i.typeMap);function y(e,o){return!!c.includes(e)||(o.error(`"${e}" is not a valid weather type`),!1)}const a=1e4;function p(e,o){if(e.type!==o.type)return!1;switch(e.type){case"sunny":case"cloudy":return e.cloudCover===o.cloudCover;case"rainy":return e.cloudCover===o.cloudCover&&e.precipitation===o.precipitation;case"snowy":return e.cloudCover===o.cloudCover&&e.precipitation===o.precipitation&&e.snowCover===o.snowCover;case"foggy":return e.fogStrength===o.fogStrength}}export{y as validateWeatherType,p as weatherEquals,a as weatherHeightLimit,i as weatherTypes,c as weatherTypesArray};
