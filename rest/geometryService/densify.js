/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,n,s,r){"use strict";function i(e,t,n){return o.apply(this,arguments)}function o(){return(o=t._asyncToGenerator((function*(e,t,i){const o=t.geometries[0].spatialReference,a=r.parseUrl(e),u={...a.query,f:"json",...t.toJSON()},p=r.asValidOptions(u,i);return n(a.path+"/densify",p).then((({data:e})=>(e.geometries||[]).map((e=>s.fromJSON(e).set({spatialReference:o})))))}))).apply(this,arguments)}e.densify=i,Object.defineProperty(e,"__esModule",{value:!0})}));
