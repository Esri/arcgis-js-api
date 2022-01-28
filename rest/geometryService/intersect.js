/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,s,n,i){"use strict";function o(e,t,r,s){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t,o,p){const u=t[0].spatialReference,a=n.parseUrl(e),l={...a.query,f:"json",sr:JSON.stringify(u.toJSON()),geometries:JSON.stringify(i.encodeGeometries(t)),geometry:JSON.stringify({geometryType:s.getJsonType(o),geometry:o.toJSON()})},c=n.asValidOptions(l,p);return r(a.path+"/intersect",c).then((({data:e})=>(e.geometries||[]).map((e=>s.fromJSON(e).set({spatialReference:u})))))}))).apply(this,arguments)}e.intersect=o,Object.defineProperty(e,"__esModule",{value:!0})}));
