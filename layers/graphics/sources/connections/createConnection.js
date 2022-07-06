/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./GeoEventConnection.js";import{WebSocketConnection as n}from"./WebSocketConnection.js";function t(t,o,r,c,i,s,a,m){const p=0===t.path.indexOf("wss://")||0===t.path.indexOf("ws://"),f={source:t,sourceSpatialReference:o,spatialReference:r,geometryType:c,filter:i,maxReconnectionAttempts:s,maxReconnectionInterval:a,customParameters:m};return p?new n(f):new e(f)}export{t as createConnection};
