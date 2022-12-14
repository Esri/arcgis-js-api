/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","./utils","../../geometry/Polygon"],(function(e,t,n,o,r,s,i){"use strict";function l(e,t,n,o){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,n,l){const a=t[0].spatialReference,u=r.parseUrl(e),p={...u.query,f:"json",sr:JSON.stringify(a.toJSON()),polygons:JSON.stringify(s.encodeGeometries(t).geometries),polylines:JSON.stringify(s.encodeGeometries(n).geometries)},g=r.asValidOptions(p,l);return o(u.path+"/autoComplete",g).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new i({spatialReference:a,rings:e})))))}))).apply(this,arguments)}e.autoComplete=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
