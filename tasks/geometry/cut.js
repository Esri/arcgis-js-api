/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils","../../geometry/support/jsonUtils","../../geometry","../../request"],(function(e,t,r,s,n){"use strict";async function o(e,s,o,i){const u="string"==typeof e?t.urlToObject(e):e,c=s[0].spatialReference,a={...i,query:{...u.query,f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:r.getJsonType(s[0]),geometries:s}),cutter:JSON.stringify(o)}},y=await n(u.path+"/cut",a),{cutIndexes:f,geometries:g=[]}=y.data;return{cutIndexes:f,geometries:g.map((e=>{const t=r.fromJSON(e);return t.spatialReference=c,t}))}}e.cut=o,Object.defineProperty(e,"__esModule",{value:!0})}));
