/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./WebSocketConnection","./GeoEventConnection"],(function(e,n,t){"use strict";function o(e,o,c,i,r,s,a){const f=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),p={source:e,sourceSpatialReference:o,spatialReference:c,geometryType:i,filter:r,maxReconnectionAttempts:s,maxReconnectionInterval:a};return f?new n.WebSocketConnection(p):new t(p)}e.createConnection=o,Object.defineProperty(e,"__esModule",{value:!0})}));
