/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./GeoEventConnection","./WebSocketConnection","../../../support/ClientSideConnection"],(function(e,t,n,o){"use strict";function i(e,i,c,r,s,a,u,p){const l={source:e,sourceSpatialReference:i,spatialReference:c,geometryType:r,filter:s,maxReconnectionAttempts:a,maxReconnectionInterval:u,customParameters:p};if(!e)return new o.ClientSideConnection(l);return e.path.startsWith("wss://")||e.path.startsWith("ws://")?new n.WebSocketConnection(l):new t(l)}e.createConnection=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
