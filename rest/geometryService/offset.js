/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","../support/OffsetParameters","../../tasks/operations/offset"],(function(e,t,s,r,o,n,a){"use strict";function f(e,t,s){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,f){t=n.from(t);const i=a.offsetToRESTParameters(t),p=o.parseUrl(e),u={...p.query,f:"json",...i},l=t.geometries[0].spatialReference,c=o.asValidOptions(u,f);return s(p.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:l})))))}))).apply(this,arguments)}e.offset=f,Object.defineProperty(e,"__esModule",{value:!0})}));
