/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","../../geometry/Polygon"],(function(e,t,r,n,s,o){"use strict";function i(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,r){const i=s.parseUrl(e),a={...i.query,f:"json",...t.toJSON()},u=t.outSpatialReference||t.geometries[0].spatialReference,l=s.asValidOptions(a,r);return n(i.path+"/buffer",l).then((e=>(e.data.geometries||[]).map((({rings:e})=>new o({spatialReference:u,rings:e})))))}))).apply(this,arguments)}e.buffer=i,Object.defineProperty(e,"__esModule",{value:!0})}));
