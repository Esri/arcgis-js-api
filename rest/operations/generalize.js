/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,t,i){"use strict";const r=new t.JSONMap({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function n(e){const{geometries:t,deviationUnit:n,maxDeviation:s}=e.toJSON(),o={maxDeviation:s};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:i.getJsonType(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),r.write(n,o,"deviationUnit"),o}e.generalizeToRESTParameters=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
