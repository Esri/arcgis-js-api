/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,t,i){"use strict";const s=new t.JSONMap({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});e.generalizeToRESTParameters=function(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),o={maxDeviation:n};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:i.getJsonType(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),s.write(r,o,"deviationUnit"),o},Object.defineProperty(e,"__esModule",{value:!0})}));
