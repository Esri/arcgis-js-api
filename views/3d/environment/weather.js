/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./CloudyWeather","./FoggyWeather","./RainyWeather","./SunnyWeather"],(function(e,t,n,r,y){"use strict";const o={key:"type",base:null,typeMap:{sunny:y,cloudy:t,rainy:r,foggy:n}};function u(e,t){if(e.type!==t.type)return!1;switch(e.type){case"sunny":case"rainy":case"cloudy":return e.cloudCover===t.cloudCover;case"foggy":return e.fogStrength===t.fogStrength}}e.weatherEquals=u,e.weatherTypes=o,Object.defineProperty(e,"__esModule",{value:!0})}));
