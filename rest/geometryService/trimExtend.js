/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../utils","../support/TrimExtendParameters","../../tasks/operations/trimExtend","../../geometry/Polyline"],(function(e,t,r,n,s,a,i,o){"use strict";function p(e,t,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,r){t=a.from(t);const p=i.trimExtendToRESTParameters(t),u=s.parseUrl(e),l={...u.query,f:"json",...p},m=t.sr,c=s.asValidOptions(l,r);return n(u.path+"/trimExtend",c).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new o({spatialReference:m,paths:e})))))}))).apply(this,arguments)}e.trimExtend=p,Object.defineProperty(e,"__esModule",{value:!0})}));
