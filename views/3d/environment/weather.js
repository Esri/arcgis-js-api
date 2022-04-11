/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/has","./CloudyWeather","./FoggyWeather","./RainyWeather","./SnowyWeather","./SunnyWeather"],(function(e,t,r,n,a,o,y){"use strict";const s={key:"type",base:null,typeMap:{sunny:y,cloudy:r,rainy:a,snowy:o,foggy:n}},u=Object.keys(s.typeMap);function i(){return t("enable-feature:precipitation")?u:u.filter((e=>"snowy"!==e))}function c(e,t){return!!i().includes(e)||(t.error(`"${e}" is not a valid weather type`),!1)}const l=1e4;function h(e,t){if(e.type!==t.type)return!1;switch(e.type){case"sunny":case"rainy":case"snowy":case"cloudy":return e.cloudCover===t.cloudCover;case"foggy":return e.fogStrength===t.fogStrength}}e.getWeatherTypes=i,e.validateWeatherType=c,e.weatherEquals=h,e.weatherHeightLimit=l,e.weatherTypes=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
