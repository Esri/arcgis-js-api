/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,n,s,i){"use strict";function o(e,t,r,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,o,u){const f=t[0].spatialReference,p=s.parseUrl(e);let l={query:{...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(i.encodeGeometries(t)),geometry:JSON.stringify({geometryType:n.getJsonType(o),geometry:o.toJSON()})}};return u&&(l={...u,...l}),r(p.path+"/difference",l).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:f})))))}))).apply(this,arguments)}e.difference=o,Object.defineProperty(e,"__esModule",{value:!0})}));
