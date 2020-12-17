/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/urlUtils","../../geometry/support/jsonUtils","../../request","./utils"],(function(e,t,i,s,r){"use strict";e.simplify=async function(e,o,n){const u="string"==typeof e?t.urlToObject(e):e,c=o[0].spatialReference,f=i.getJsonType(o[0]),y={...n,query:{...u.query,f:"json",sr:c.wkid?c.wkid:JSON.stringify(c),geometries:JSON.stringify(r.encodeGeometries(o))}},{data:l}=await s(u.path+"/simplify",y);return r.decodeGeometries(l.geometries,f,c)},Object.defineProperty(e,"__esModule",{value:!0})}));
