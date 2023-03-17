/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./CloudyWeather","./FoggyWeather","./RainyWeather","./SnowyWeather","./SunnyWeather"],(function(e,t,r,a,y,n){"use strict";const o={key:"type",base:n,typeMap:{sunny:n,cloudy:t,rainy:a,snowy:y,foggy:r}},i=Object.keys(o.typeMap);function s(e,t){return!!i.includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const h=1e4;e.validateWeatherType=s,e.weatherHeightLimit=h,e.weatherTypes=o,e.weatherTypesArray=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
