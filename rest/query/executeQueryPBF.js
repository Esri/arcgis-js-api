/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/FeatureSet","../../tasks/support/Query","../utils","./operations/query","./operations/pbfJSONFeatureSet"],(function(e,t,r,a,u,n){"use strict";async function s(e,r,a){const u=await o(e,r,a);return t.fromJSON(u)}async function o(e,t,s){const o=a.parseUrl(e),c={...s},i=r.from(t),p=!i.quantizationParameters,{data:f}=await u.executeQueryPBF(o,i,new n.JSONFeatureSetParserContext({sourceSpatialReference:i.sourceSpatialReference,applyTransform:p}),c);return f}e.executeQueryPBF=s,e.executeRawQueryPBF=o,Object.defineProperty(e,"__esModule",{value:!0})}));
