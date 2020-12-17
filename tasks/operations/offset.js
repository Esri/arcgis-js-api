/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,t,s){"use strict";const o=new t.JSONMap({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),r=new t.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});e.offsetToRESTParameters=function(e){const{geometries:t,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:a}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return t&&t.length&&(l.geometries=JSON.stringify({geometryType:s.getJsonType(t[0]),geometries:t}),l.sr=JSON.stringify(t[0].spatialReference)),n&&(l.offsetHow=o.toJSON(n)),a&&(l.offsetUnit=r.toJSON(a)),l},Object.defineProperty(e,"__esModule",{value:!0})}));
