/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./GeoEventConnection","./WebSocketConnection"],(function(e,n,t){"use strict";function o(e,o,c,i,r,s,a,f){const u=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),p={source:e,sourceSpatialReference:o,spatialReference:c,geometryType:i,filter:r,maxReconnectionAttempts:s,maxReconnectionInterval:a,customParameters:f};return u?new t.WebSocketConnection(p):new n(p)}e.createConnection=o,Object.defineProperty(e,"__esModule",{value:!0})}));
