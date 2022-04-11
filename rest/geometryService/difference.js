/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,n,s,o){"use strict";function i(e,t,r,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,i,u){const l=t[0].spatialReference,a=s.parseUrl(e);let f={query:{...a.query,f:"json",sr:JSON.stringify(l.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t)),geometry:JSON.stringify({geometryType:n.getJsonType(i),geometry:i.toJSON()})}};return u&&(f={...u,...f}),r(a.path+"/difference",f).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:l})))))}))).apply(this,arguments)}e.difference=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
