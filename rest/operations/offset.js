/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,t,o){"use strict";const s=new t.JSONMap({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),r=new t.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function i(e){const{geometries:t,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:l}=e.toJSON(),a={bevelRatio:i,offsetDistance:f};return t&&t.length&&(a.geometries=JSON.stringify({geometryType:o.getJsonType(t[0]),geometries:t}),a.sr=JSON.stringify(t[0].spatialReference)),n&&(a.offsetHow=s.toJSON(n)),l&&(a.offsetUnit=r.toJSON(l)),a}e.offsetToRESTParameters=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
