/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./CloudyWeather","./FoggyWeather","./RainyWeather","./SnowyWeather","./SunnyWeather"],(function(e,t,a,r,y,n){"use strict";const o={key:"type",base:n,typeMap:{sunny:n,cloudy:t,rainy:r,snowy:y,foggy:a}},i=Object.keys(o.typeMap);function s(e,t){return!!i.includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const u=1e4;e.validateWeatherType=s,e.weatherHeightLimit=u,e.weatherTypes=o,e.weatherTypesArray=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
