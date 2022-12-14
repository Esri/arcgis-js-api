/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","../operations/trimExtend","../support/TrimExtendParameters","../../geometry/Polyline"],(function(e,t,r,n,s,o,a,i){"use strict";function u(e,t,r){return l.apply(this,arguments)}function l(){return(l=t._asyncToGenerator((function*(e,t,r){t=a.from(t);const u=o.trimExtendToRESTParameters(t),l=s.parseUrl(e),p={...l.query,f:"json",...u},m=t.sr,d=s.asValidOptions(p,r);return n(l.path+"/trimExtend",d).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new i({spatialReference:m,paths:e})))))}))).apply(this,arguments)}e.trimExtend=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
