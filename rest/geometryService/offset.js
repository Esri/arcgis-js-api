/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","../operations/offset","../support/OffsetParameters"],(function(e,t,r,s,o,n,a){"use strict";function f(e,t,r){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,f){t=a.from(t);const i=n.offsetToRESTParameters(t),p=o.parseUrl(e),u={...p.query,f:"json",...i},l=t.geometries?.[0].spatialReference,c=o.asValidOptions(u,f);return r(p.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>s.fromJSON(e).set({spatialReference:l})))))}))).apply(this,arguments)}e.offset=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
