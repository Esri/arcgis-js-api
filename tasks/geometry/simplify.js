/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/urlUtils","../../geometry/support/jsonUtils"],(function(e,t,r,n,i){"use strict";function o(e,t,r){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(e,t,o){const s="string"==typeof e?n.urlToObject(e):e,y=t[0].spatialReference,l=i.getJsonType(t[0]),c={...o,query:{...s.query,f:"json",sr:y.wkid?y.wkid:JSON.stringify(y),geometries:JSON.stringify(u(t))}};return p((yield r(s.path+"/simplify",c)).data,l,y)}))).apply(this,arguments)}function u(e){return{geometryType:i.getJsonType(e[0]),geometries:e.map((e=>e.toJSON()))}}function p(e,t,r){const n=i.getGeometryType(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}e.simplify=o,Object.defineProperty(e,"__esModule",{value:!0})}));
