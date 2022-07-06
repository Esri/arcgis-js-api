/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../core/maybe.js";function n(n){return r(n)&&r(n.cubeMap)&&n.coverage>0}function e(n){return r(n)&&!n.running}export{e as ensureClouds,n as isReadyCloudsData};
