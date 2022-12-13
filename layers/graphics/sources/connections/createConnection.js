/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./GeoEventConnection","./WebSocketConnection"],(function(e,n,t){"use strict";function o(e,o,c,i,r,a,s,u){const f=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),l={source:e,sourceSpatialReference:o,spatialReference:c,geometryType:i,filter:r,maxReconnectionAttempts:a,maxReconnectionInterval:s,customParameters:u};return f?new t.WebSocketConnection(l):new n(l)}e.createConnection=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
