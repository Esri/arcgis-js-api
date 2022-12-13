/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","../../geometry/Polygon"],(function(e,t,r,n,o,s){"use strict";function i(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,r){const i=o.parseUrl(e),a={...i.query,f:"json",...t.toJSON()},u=t.outSpatialReference||t.geometries[0].spatialReference,l=o.asValidOptions(a,r);return n(i.path+"/buffer",l).then((e=>(e.data.geometries||[]).map((({rings:e})=>new s({spatialReference:u,rings:e})))))}))).apply(this,arguments)}e.buffer=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
