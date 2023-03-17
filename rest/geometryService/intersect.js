/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,n,s,i){"use strict";function o(e,t,r,n){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,o,a){const p=t[0].spatialReference,u=s.parseUrl(e),l={...u.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(i.encodeGeometries(t)),geometry:JSON.stringify({geometryType:n.getJsonType(o),geometry:o.toJSON()})},y=s.asValidOptions(l,a);return r(u.path+"/intersect",y).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:p})))))}))).apply(this,arguments)}e.intersect=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
