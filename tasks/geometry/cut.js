/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../../core/urlUtils","../../geometry/support/jsonUtils"],(function(e,t,r,n,s,o){"use strict";function i(e,t,r,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,r,i){const u="string"==typeof e?s.urlToObject(e):e,c=t[0].spatialReference,p={...i,query:{...u.query,f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:o.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=yield n(u.path+"/cut",p),{cutIndexes:y,geometries:a=[]}=l.data;return{cutIndexes:y,geometries:a.map((e=>{const t=o.fromJSON(e);return t.spatialReference=c,t}))}}))).apply(this,arguments)}e.cut=i,Object.defineProperty(e,"__esModule",{value:!0})}));
