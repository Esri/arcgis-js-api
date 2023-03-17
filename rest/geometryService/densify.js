/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,n,r,s){"use strict";function o(e,t,n){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,o){const i=t.geometries?.[0].spatialReference,a=s.parseUrl(e),u={...a.query,f:"json",...t.toJSON()},l=s.asValidOptions(u,o);return n(a.path+"/densify",l).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:i})))))}))).apply(this,arguments)}e.densify=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
