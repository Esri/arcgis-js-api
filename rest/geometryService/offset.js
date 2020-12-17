/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils","../../tasks/operations/offset","../../tasks/support/OffsetParameters"],(function(e,t,s,r,o,a){"use strict";e.offset=async function(e,f,n){f=a.from(f);const i=o.offsetToRESTParameters(f),p=r.parseUrl(e),u={...p.query,f:"json",...i},c=f.geometries[0].spatialReference,l=r.asValidOptions(u,n);return s(p.path+"/offset",l).then((({data:e})=>(e.geometries||[]).map((e=>t.fromJSON(e).set({spatialReference:c})))))},Object.defineProperty(e,"__esModule",{value:!0})}));
