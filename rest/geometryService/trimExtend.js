/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","../operations/trimExtend","../support/TrimExtendParameters","../../geometry/Polyline"],(function(e,t,r,n,o,s,a,i){"use strict";function p(e,t,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,r){t=a.from(t);const p=s.trimExtendToRESTParameters(t),u=o.parseUrl(e),l={...u.query,f:"json",...p},m=t.sr,c=o.asValidOptions(l,r);return n(u.path+"/trimExtend",c).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new i({spatialReference:m,paths:e})))))}))).apply(this,arguments)}e.trimExtend=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
