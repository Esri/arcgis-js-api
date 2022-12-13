/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","../operations/offset","../support/OffsetParameters"],(function(e,t,s,r,o,n,a){"use strict";function f(e,t,s){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,f){t=a.from(t);const i=n.offsetToRESTParameters(t),u=o.parseUrl(e),p={...u.query,f:"json",...i},l=t.geometries?.[0].spatialReference,c=o.asValidOptions(p,f);return s(u.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:l})))))}))).apply(this,arguments)}e.offset=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
