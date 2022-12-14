/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,r,s,n,i){"use strict";function o(e,t,r,s){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,o,u){const a=t[0].spatialReference,l=n.parseUrl(e),p={...l.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(i.encodeGeometries(t)),geometry:JSON.stringify({geometryType:s.getJsonType(o),geometry:o.toJSON()})},c=n.asValidOptions(p,u);return r(l.path+"/intersect",c).then((({data:e})=>(e.geometries||[]).map((e=>s.fromJSON(e).set({spatialReference:a})))))}))).apply(this,arguments)}e.intersect=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
