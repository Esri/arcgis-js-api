/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","../../geometry/Polygon"],(function(e,t,r,n,o,i){"use strict";function s(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,r){const s=o.parseUrl(e),a={...s.query,f:"json",...t.toJSON()},u=t.outSpatialReference||t.geometries[0].spatialReference,l=o.asValidOptions(a,r);return n(s.path+"/buffer",l).then((e=>(e.data.geometries||[]).map((({rings:e})=>new i({spatialReference:u,rings:e})))))}))).apply(this,arguments)}e.buffer=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
