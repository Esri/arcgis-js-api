/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,n,o,s){"use strict";function i(e,t,r,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,i,u){const f=t[0].spatialReference,l=o.parseUrl(e);let p={query:{...l.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(s.encodeGeometries(t)),geometry:JSON.stringify({geometryType:n.getJsonType(i),geometry:i.toJSON()})}};return u&&(p={...u,...p}),r(l.path+"/difference",p).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:f})))))}))).apply(this,arguments)}e.difference=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
