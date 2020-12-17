/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Polyline","../../geometry","../../request","../utils","../../tasks/operations/trimExtend","../../tasks/support/TrimExtendParameters"],(function(e,t,r,s,n,a,i){"use strict";e.trimExtend=async function(e,r,o){r=i.from(r);const m=a.trimExtendToRESTParameters(r),p=n.parseUrl(e),d={...p.query,f:"json",...m},u=r.sr,l=n.asValidOptions(d,o);return s(p.path+"/trimExtend",l).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new t({spatialReference:u,paths:e})))))},Object.defineProperty(e,"__esModule",{value:!0})}));
